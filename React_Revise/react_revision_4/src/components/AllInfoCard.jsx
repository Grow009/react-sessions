import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function AllInfoCard({ item }) {

    const navigate = useNavigate()
    const params=useParams();
    const {categoryName,itemName}=params;

    console.log("all info card url parameters","ccccccc",categoryName,itemName)
    console.log()
    return (
        <div className="card">
            <img src={item?.image} alt={item?.title} className="card-img" />
            <div className="card-body">
                <h2 className="card-title">{item?.title}</h2>
                <p className="card-price">₹{item?.price}</p>
                <h2 className="card-title">{item?.description.substr(0, 20)}</h2>
                <p className="card-price">{item?.category}</p>
                <button onClick={() => {
                    // navigate("/")
                    navigate(-1)
                }}>go to home</button>
            </div>
        </div>
    )
}
