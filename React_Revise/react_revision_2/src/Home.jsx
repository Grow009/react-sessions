import { useEffect } from "react"

function Home() {
    /*4th Case. 
component  1st time render hone par and component ke unmount hone par(ek component ko htakar dusra component load kar rhe hai UI me)

 useEffect(() => {
        console.log("only 1st time and id kee value chnage hone par chalunga")
        return (() => {
            console.log("me chalunga component 1st time me and unmount me")
        })
    })

*/
    const ob1 = {
        id: 101,
        name: "Mohan"
    }
    useEffect(() => {
        return (() => {
            console.log("me chalumga component ke unmount hone par")
            // ob1=null
        })
    })



    return (
        <div>
            <del>Home</del>
            <p><b>Id:</b>{ob1.id}</p>
            <p><b>Name:</b>{ob1.name}</p>
        </div>
    )
}

export default Home