import SecondCom from "./SecondCom"

function FirstCom({Grade}) {
    return (
        <div>FirstCom

            <hr />
            <SecondCom g1={Grade}/>

        </div>
    )
}

export default FirstCom