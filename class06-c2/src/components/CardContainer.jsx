
import BestApproachCard from './BestApproachCard'
// import SingleCard from './SingleCard'

function CardContainer({ Data }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", width: "800px" }}>

            {/* <SingleCard Data={Data}/> */}

            {

                Data.map((item) => {
                    return <BestApproachCard Data={item} />
                })

            }

        </div>



    )
}

export default CardContainer