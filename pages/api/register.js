import bcrypt from "bcrypt";
import connectPromise from "../../lib/mongodb";

const ENABLE_REGISTRATION = false;

/**
 * Todo: Add authorization against password you will only known. Should be difficult one.
 * Require for that password to be present in Authorization header.
 */
export default async function handler(req, res) {
  if (!ENABLE_REGISTRATION) {
    return false;
  }
  try {
    // Connect with MongoDB
    const client = await connectPromise;
    const isConnected = client.isConnected();

    const { username, password } = req.body;

    console.log("Received username and password", username, password);

    if (!isConnected) {
      throw new Error("MongoDB client is not connected");
    }

    const db = client.db("userAccount");
    const userCollection = db.collection("users");

    const existingUser = await userCollection.findOne({ username });

    if (existingUser) {
      console.log(`User "${username}" already exists`);

      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Insert the user into the collection
      const user = { username, password: hashedPassword };
      const result = await userCollection.insertOne(user);

      if (!result.insertedCount) {
        return res
          .status(400)
          .json({ success: false, message: "Unable to insert user" });
      }

      return res.status(200).json({ success: true });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Unknown error occurred" });
  }
}
