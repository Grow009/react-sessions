

function FourthCom({ grade, leAao }) {


    const name = "Kalu Lal"
    return (
        <div>FourthCom
            <p>Your Skill Grade is:  <b>{grade}<sup>+</sup></b></p>
            <button onClick={() => leAao(name)}>send data</button>
        </div>
    )
}

export default FourthCom