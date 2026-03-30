
import "./Card.css";
import { useNavigate } from "react-router-dom";

export default function Card({ item, setItem }) {
  const navigate = useNavigate()
  return (
    <div className="card">
      <img src={item?.image} alt={item?.title} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{item?.title}</h2>
        <p className="card-price">₹{item?.price}</p>
        <button onClick={() => {
          setItem(item)
          navigate(`/category/${item.category}/item/${item.title}`)
        }}>view all info</button>
      </div>
    </div>
  );
}