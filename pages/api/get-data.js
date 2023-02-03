import connectPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const connect = await connectPromise;
    const database = await connect.db("testwedingdatabase");
    const userListCollection = database.collection("userlist");

    const requestBody = req.body;
    console.log("Request Body: ", requestBody);

    const users = await userListCollection.find({}).toArray();
    console.log("Users: ", users);

    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message, success: false });
  }
}
