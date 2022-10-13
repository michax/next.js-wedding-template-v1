import connectPromise from "../../lib/mongodb";

export default async function handler(req, res) {

    const connect = await connectPromise;
    const database = await connect.db("testwedingdatabase");
    const collection = database.collection("userlist");

    const data = req.body;
    console.log("Data ", data);



    const all = await collection.find({}).toArray();
    console.log("all", all);

    res.status(200).json({
        allGood: true,
        all,
    });
}
