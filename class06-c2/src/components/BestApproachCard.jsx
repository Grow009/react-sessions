import React from 'react'

function BestApproachCard({Data}) {
  return (
    <div>
            <div className="card">
                <p>Product Name:{Data.productName}</p>
                <p>Price:{Data.price}</p>
                <p>Rate:{Data.rate}</p>
            </div>
    </div>
  )
}

export default BestApproachCard