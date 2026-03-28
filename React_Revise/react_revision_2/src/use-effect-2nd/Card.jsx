import React, { useEffect, useState } from 'react'

function Card() {
    const [data, setData] = useState([])
    async function callApi(url) {
        try {
            const res = await fetch(url);
            const ans = await res.json();
            setData(ans)
        }

        catch (E) {
            console.log("got error ", E)
        }
    }
    // callApi("https://fakestoreapi.com/products/category/men's%20clothing")


    useEffect(() => {
        callApi("https://fakestoreapi.com/products/category/men's%20clothing")
    }, [])
    console.log("api call")
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            padding: "20px"
        }}>

            {
                data?.length === 0 ? (<p>No data found</p>)
                    : data?.map((item) => {
                        return (
                            <div
                                key={item?.id}
                                style={{
                                    border: "1px solid #ddd",
                                    borderRadius: "12px",
                                    padding: "16px",
                                    width: "220px",
                                    textAlign: "center",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                    cursor: "pointer",
                                    backgroundColor: "#fff"
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = "scale(1.05)";
                                    e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
                                }}
                            >
                                <img
                                    src={item?.image}
                                    alt={item?.image}
                                    style={{
                                        width: "100%",
                                        height: "150px",
                                        objectFit: "cover",
                                        borderRadius: "8px",
                                        marginBottom: "10px"
                                    }}
                                />

                                <p style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
                                    ${item?.price}
                                </p>

                                <p style={{ fontSize: "12px", color: "#777" }}>
                                    ID: {item?.id}
                                </p>
                            </div>
                        )
                    })
            }


        </div>
    )
}

export default Card