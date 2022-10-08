import connectPromise from "../../lib/mongodb";
import { registerUser } from "../../lib/register-user";

export default async function handler(req, res) {
    const connect = await connectPromise;
    const database = await connect.db("testwedingdatabase");
    const collection = database.collection("userlist");

    const dataFrontend = req.body;

    console.log("data from frontend", dataFrontend);

    const dataToInsert = {
        firstName: dataFrontend?.firstName,
        lastName: dataFrontend?.lastName,
        email: dataFrontend?.email,
        phone: dataFrontend?.phone,
        termsOfService: dataFrontend?.termsOfService,
    };


    if (!dataFrontend) {
        res
            .status(400)
            .json({ message: "missing data from frontend", error: "missing-data" });
        return;
    } else {
        res.status(200).json({
            id: "12231r434533533aaa",
            myBody: dataFrontend,
            message: "we got your values from FORM",
        })
    }


    const result = await registerUser({ collection, dataToInsert });
    // here we should get what we have from return in register-user
    res.status(result.status).json({ message: result.message });
    console.log("result from registerUser in MongoDB", result.status, result.message);
}
