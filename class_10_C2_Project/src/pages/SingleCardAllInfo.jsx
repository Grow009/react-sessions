import React, { useContext } from "react";
import "./SingleCardAllInfo.css";
import { useNavigate } from "react-router-dom";
import { IContext } from "../context/CardContext";

function SingleCardAllInfo() {

  const { item } = useContext(IContext);
  const navigate = useNavigate();
  return (
    <div className="card">
      <img src={item?.image} alt={item?.title} className="card-img" />

      <div className="card-content">
        <h2 className="card-title">{item?.title}</h2>

        <p className="card-category">{item?.category}</p>

        <p className="card-description">{item?.description}</p>
        <p className="card-description">item id{item?.id}</p>

        <div className="card-price-rating">
          <span className="card-price">₹{item?.price}</span>
          <span className="card-rating">
            ⭐ {item?.rating?.rate} Count ({item?.rating?.count})
          </span>
        </div>

        <button className="card-button" onClick={() => {
          // navigate("/")
          navigate(-1)
        }}>Back to home</button>
      </div>
    </div>
  );
}

export default SingleCardAllInfo;