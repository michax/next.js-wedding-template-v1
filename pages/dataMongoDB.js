import React, { useEffect, useState } from 'react'
import clientPromise from '../lib/mongodb';


export default function DataMongoDB({ isConnected }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        //start loading when data is fetched
        setLoading(true);


        async function getData() {
            const response = await fetch("/api/get-data",);
            const responseData = await response.json();
            console.log("clickHandler", { responseData });

            const all = responseData.all;
            console.log("all", { all });
            setData(all)

            //stop loading when data is fetched
            setLoading(false);
        }

        getData();
    }, []);

    console.log(data)
    return (

        <div>

            {data.map((person) => {
                return (
                    <div key={person.id}>
                        <p>{person.firstName}</p>
                    </div>
                )

            })}
        </div>
    )
}

export async function getServerSideProps() {
    // Connect with MongoDB
    const client = await clientPromise;
    console.log("[debug] IndexPage. Connected to mongo db");
    const isConnected = await client.isConnected();

    return {
        props: { isConnected },
    };
}

