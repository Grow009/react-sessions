import FourthCom from "./FourthCom"

function ThridCom({ data,getInfo }) {
    return (
        <div>
            ThridCom
            <hr />
            <FourthCom grade={data} leAao={getInfo} />
        </div>
    )
}

export default ThridCom
