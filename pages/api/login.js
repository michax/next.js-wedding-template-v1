import bcrypt from "bcrypt";
import connectPromise from "../../lib/mongodb";
import { setCookie } from "cookies-next";

export default async function handler(req, res) {
  // new instance of the Cookies class

  try {
    // Connect with MongoDB
    const client = await connectPromise;
    const isConnected = client.isConnected();

    const { username, password } = req.body;

    console.log(username, password);

    if (!isConnected) {
      throw new Error("MongoDB client is not connected");
    }

    const db = client.db("userAccount");
    const sessionCollection = db.collection("session");
    const userCollection = db.collection("users");

    // Check if user exists in the database

    const existingUser = await userCollection.findOne({ username });

    if (!existingUser) {
      console.log(`User "${username}" doesn't exist`);
      return res
        .status(404)
        .json({ success: false, message: "User nor found" });
    }

    // Verify the password

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      console.log(`Password is incorrect`);
      return res
        .status(401)
        .json({ success: false, message: "Password is incorrect" });
    }

    // Generate a unique session ID
    const sessionId =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    const session = {
      sessionId: sessionId,
      userId: existingUser._id,
    };

    await sessionCollection.insertOne(session);

    // Set the session ID in a cookie
    setCookie(res, "sessionId", sessionId, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    return res.status(200).json({ success: true, sessionId: sessionId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
