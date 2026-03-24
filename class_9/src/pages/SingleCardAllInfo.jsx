import React from "react";
import "./SingleCardAllInfo.css";
import { useNavigate } from "react-router-dom";

function SingleCardAllInfo({ product }) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <img src={product?.image} alt={product?.title} className="card-img" />

      <div className="card-content">
        <h2 className="card-title">{product?.title}</h2>

        <p className="card-category">{product?.category}</p>

        <p className="card-description">{product?.description}</p>
        <p className="card-description">product id{product?.id}</p>

        <div className="card-price-rating">
          <span className="card-price">₹{product?.price}</span>
          <span className="card-rating">
            ⭐ {product?.rating?.rate} Count ({product?.rating?.count})
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