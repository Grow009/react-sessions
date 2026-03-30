
import "./Card.css";

export default function Card({item }) {
  return (
    <div className="card">
      <img src={item?.image} alt={item?.title} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{item?.title}</h2>
        <p className="card-price">₹{item?.price}</p>
      </div>
    </div>
  );
}