import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

function Home() {

    const cssStyle = {
        display: "flex",
        width: "1000px",
        flexWrap: "wrap",
        margin: "0 auto",
        justifyContent: "space-evenly",
        gap: "20px",
        marginTop:"10px"
    }
    const [data, setData] = useState([]);
    async function getData(url) {
        try {
            const res = await fetch(url);
            const ans = await res.json();
            setData(ans)
        }

        catch (e) {
            console.log("Error", e)
        }
    }

    useEffect(() => {
        getData("https://fakestoreapi.com/products/category/electronics")
    }, [])
    console.log(data)
    return (
        <div style={cssStyle}>

            {
                data.map((item) => {
                    return (<div key={item.id}>
                        <Card item={item} />
                    </div>)
                })
            }

        </div>
    )
}

export default Home