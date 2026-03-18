

function Card(props) {
    console.log(props)
    const { id, name, age } = props.cartData;
    const chnageInfo = props.chnageInfo
  
    return (
        <div className='card'>
            {/* <p>Id is :{props.data.id}</p>
            <p>Name is:{props.data.name}</p>
            <p>Age is :{props.data.age}</p> */}
            <p>Id is :{id}</p>
            <p>Name is:{name}</p>
            <p>Age is :{age}</p>

            <button onClick={()=>{
                chnageInfo({...props.cartData,name:"Rohan"})
            }}>chnage info</button>
        </div>
    )
}

export default Card