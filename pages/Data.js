import React , {useEffect, useState}from 'react'

export default function Data() {
    const [data, setData] = useState();


    useEffect(() => {
        async function getData() {
            const response = await fetch("/api/get-data", {
                method: "GET",

                headers: {
                    "Content-Type": "application/json",
                },
            });
            const responseData = await response.json();


            const all = responseData.all;
           
            setData(all)
            setLoading(false);
        }

        getData();
    }, []);


    return (
        <div>{data}</div>
    )
}
