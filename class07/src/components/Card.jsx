import "./Card.css";
function Card() {
      console.log("4th Card")
    // setTimeout(() => {
    //     console.log("4th Card")
    // }, 4000)
    return (
        <div className="wrapper">
            {

                [1, 2, 3, 4].map((item,i) => {
                    return (<div className="single-card" key={i}>
                        <p>One </p>
                        <p>Two</p>
                        <p>Three</p>
                    </div>)
                })
            }

        </div>
    )
}

export default Card