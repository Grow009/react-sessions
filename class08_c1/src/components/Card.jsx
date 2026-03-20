import "./Card.css"
export default function Card({ item }) {
    return (
        <div className="card">
            <img
                className="card-image"
                src={item?.image}
                alt="Fjallraven Backpack"
            />

            <div className="card-body">
                <h2 className="card-title">
                    {item?.title.substring(0, 14)}
                </h2>

                <p className="card-category">{item?.category}</p>

                <p className="card-description">
                    {item?.description.substring(0, 64)}
                </p>

                <div className="card-rating">
                    ⭐  {item?.rating.rate}
                </div>

                <div className="card-footer">
                    <span className="card-price">${item?.price}</span>
                   
                </div>
            </div>
        </div>
    )
}
