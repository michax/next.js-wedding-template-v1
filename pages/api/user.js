import connectPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    // Connect with MongoDB
    const client = await connectPromise;
    const isConnected = client.isConnected();

    const database = client.db("testwedingdatabase");
    const collection = database.collection("userlist");

    if (!isConnected) {
      throw new Error("MongoDB client is not connected");
    }

    const dataFrontend = req.body;

    if (!dataFrontend) {
      res
        .status(400)
        .json({ message: "missing data from frontend", error: "missing-data" });
      return;
    }

    const dataToInsert = {
      firstName: dataFrontend?.firstName,
      lastName: dataFrontend?.lastName,
      email: dataFrontend?.email,
      phone: dataFrontend?.phone,

      isWithCompanion: dataFrontend?.isWithCompanion,
      firstNameCompanion: dataFrontend?.firstNameCompanion,
      lastNameCompanion: dataFrontend?.lastNameCompanion,

      isComing: dataFrontend?.isComing,

      isWithChildren: dataFrontend?.isWithChildren,
      amountKids: dataFrontend?.amountKids,
      amountTeenagers: dataFrontend?.amountTeenagers,

      isVodka: dataFrontend?.isVodka,
      isGin: dataFrontend?.isGin,
      isWhisky: dataFrontend?.isWhisky,
      isBeer: dataFrontend?.isBeer,
      isNonAlcohol: dataFrontend?.isNonAlcohol,

      isPeanuts: dataFrontend?.isPeanuts,
      isEggs: dataFrontend?.isEggs,
      isNuts: dataFrontend?.isNuts,
    };

    // Search for existing user in MongoDB
    const existingUsersInMdb = await collection.findOne({
      email: dataToInsert.email,
    });

    if (existingUsersInMdb) {
      console.log(`User "${dataToInsert.email}" exist`);
      return res.status(402).json({ success: false, message: "User exist" });
    }

    const result = await collection.insertOne(dataToInsert);

    if (!result.insertedCount) {
      return res
        .status(400)
        .json({ success: false, message: "Unable to insert data" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
