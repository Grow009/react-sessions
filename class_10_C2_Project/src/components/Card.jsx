import { useContext } from "react"
import "./Card.css"
import { useNavigate } from "react-router-dom"
import { IContext } from "../context/CardContext"

function Card({ item}) {
//  getItemFromCard, showbtn, setShowBtn 


const {getItemFromCard,showbtn,setShowBtn}=useContext(IContext)

  const navigate = useNavigate()
  return (
    <>
      <div className="card">
        <img className="card-img" src={item?.image} alt={item?.title} />

        <div className="card-content">
          <div className="card-title">{`${item?.title.substr(0, 21)}...`}</div>
          <div className="card-description">


            {
              showbtn ?
                (<span>{`${item?.description.substr(0, 81)}...`}'</span>)
                :
                (<span>${item?.description}</span>)

            }


            <span style={{ color: "blue" }}

              onClick={() => {
                setShowBtn(!showbtn)
              }}
            >

              {showbtn ? "read more " : "read less"}
            </span>
          </div>
          <div className="card-price">₹{item?.price}</div>
          < button className="card-button" onClick={() => {
            navigate(`/card-info/${item.id}/${item?.title}`)
            getItemFromCard(item)
          }}>View All Info</button>
        </div>
      </div >
    </>
  )
}

export default Card