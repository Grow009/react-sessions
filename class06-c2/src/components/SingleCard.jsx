

function SingleCard({ Data }) {
    console.log("single card me App vala Data", Data)
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", width: "800px" }}>

            <div className="card">
                <p>Product Name:{Data[0].productName}</p>
                <p>Price:{Data[0].price}</p>
                <p>Rate:{Data[0].rate}</p>

            </div>
            <div className="card">
                <p>Product Name:{Data[1].productName}</p>
                <p>Price:{Data[1].price}</p>
                <p>Rate:{Data[1].rate}</p>
            </div>
            <div className="card">
                <p>Product Name:{Data[2].productName}</p>
                <p>Price:{Data[2].price}</p>
                <p>Rate:{Data[2].rate}</p>
            </div>
            <div className="card">
                <p>Product Name:{Data[3].productName}</p>
                <p>Price:{Data[3].price}</p>
                <p>Rate:{Data[3].rate}</p>
            </div>
        </div>
    )
}

export default SingleCard