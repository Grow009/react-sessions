import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const IContext = createContext()
function CardContext({ children }) {


    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [item, setItem] = useState()
    const [showbtn, setShowBtn] = useState(true)
    function getItemFromCard(singleData) {
        setItem(singleData)
    }


    async function ApiForCard(url) {
        try {

            const res = await fetch(url);
            const ans = await res.json();
            setData(ans)
            setLoader(false)
        }
        catch (err) {
            console.log("Error Happened ", err)
            setLoader(false)
        }
    }
    const obj = {
        data,
        loader,
        item,
        showbtn,
        setData,
        setLoader,
        setItem,
        ApiForCard,
        setShowBtn,
        getItemFromCard
    }
    return (
        <IContext.Provider value={obj} >
            {children}
        </IContext.Provider>
    )
}

export default CardContext