import { useEffect, useState } from 'react'
import Card from '../components/Card';

function Home({ setItem }) {
    const [data, setData] = useState([]);
    const cssStyle = {
        display: "flex",
        width: "1000px",
        flexWrap: "wrap",
        margin: "0 auto",
        justifyContent: "space-evenly",
        gap: "20px",
        marginTop: "10px"
    }
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
        getData("https://fakestoreapi.com/products/category/men's clothing")
    }, [])
    console.log(data)
    return (
        <div style={cssStyle}>

            {
                data.map((item) => {
                    return (<div key={item.id}>
                        <Card item={item} setItem={setItem} />
                    </div>)
                })
            }

        </div>
    )
}

export default Home