

function BestCart({cartData,chnageInfo}) {

  
    return (
        <div className='card'>
            <p>Id is :{cartData.id}</p>
            <p>Name is:{cartData.name}</p>
            <p>Age is :{cartData.age}</p>

            <button onClick={()=>{
                chnageInfo({...cartData,name:"Rohan"})
            }}>chnage info</button>
        </div>
    )
}

export default BestCart