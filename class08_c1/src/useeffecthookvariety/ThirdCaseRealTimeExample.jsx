import { useState, useEffect } from 'react'
import Card from '../components/Card';
import Loader from '../components/Loader';

function ThirdCaseRealTimeExample() {
    const [data, setData] = useState();
    const [spinner, setSpinner] = useState(true)
    const [productNo, setProductNo] = useState(1);

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
        callApi(`https://fakestoreapi.com/products/${productNo}`)
    }, [productNo])

    return (
        <div>
            {
                spinner ? (<Loader />) : (<Card item={data} />)

            }
            <button onClick={() =>
                setProductNo(productNo + 1)
            }>change product</button>
        </div>
    )
}

export default ThirdCaseRealTimeExample