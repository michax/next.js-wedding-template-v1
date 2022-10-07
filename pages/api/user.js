export default function handler(req, res) {
    const body = req.body;

    console.log('data from frontend', body)

    if (!body) {
        res.status(400)
            .json({ message: "missing data from frontend", error: "missing-data" })
    } else {
        res.status(200).json({
            id: "12231r434533533aaa",
            myBody: body,
            message: "we got your values from FORM",
        })
    }
}
