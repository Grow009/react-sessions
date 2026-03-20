import { useEffect, useState } from "react"
import Card from "../components/Card";
import Loader from "../components/Loader";


function SecondCaseRealTimeExample() {
    const [data, setData] = useState();
    const [spinner, setSpinner] = useState(true)

    async function callApi(url) {
        try {
           
            const ans = await fetch(url);
            const res = await ans.json();
            console.log("Data from api", res)
            setData(res);
            setSpinner(false)

        }

        catch (err) {
            console.log("Got an error while making an API request", err)
            setSpinner(false)
        }
    }
    useEffect(() => {
        callApi("https://fakestoreapi.com/products")
    }, [])
    return (
        <div >
            {
                spinner ? (<Loader />) :
                    (<div style={{ display: "flex", width: "1300px", justifyContent: "center", flexWrap: "wrap", margin: "0 auto" }}>
                        {
                            data?.map((item, index) => {
                                return (<Card item={item} key={index} />)
                            })
                        }
                    </div>)
            }


        </div>
    )
}

export default SecondCaseRealTimeExample
