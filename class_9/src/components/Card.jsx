// import { useState } from "react"
import { use } from "react"
import "./Card.css"
import { useNavigate } from "react-router-dom"

function Card({ item,getItemFromCard }) {

  // const [showReadmore, setShowReadMore] = useState(true)
  const navigate = useNavigate()
  return (
    <>
      <div className="card">
        <img className="card-img" src={item?.image} alt={item?.title} />

        <div className="card-content">
          <div className="card-title">{`${item?.title.substr(0, 21)}...`}</div>
          <div className="card-description">
            {`${item?.description.substr(0, 81)}...`}


          </div>
          <div className="card-price">₹{item?.price}</div>
          < button className="card-button" onClick={() => {
            navigate(`/card-info/${item.id}/${item?.title}`)
            getItemFromCard(item)
          }}>View All Info</button>
        </div>
      </div>
    </>
  )
}

export default Card