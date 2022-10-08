export const registerUser = async ({ collection, dataToInsert }) => {
    // Search for existing user in MongoDB
    const existingUsersInMdb = await collection.findOne({
        email: dataToInsert.email
    })


    if (existingUsersInMdb?.email === dataToInsert.email) {
        return {
            isSuccess: true,
            message: "user exists",
            isExisting: true,
            status: 401,
        }
    }
    // SENDING TO MONGODB
    const response = await collection.insertOne(dataToInsert);
}