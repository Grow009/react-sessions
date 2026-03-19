

function Danka({ kachra, setChaiRedy, setName }) {
    console.log(kachra)

    const bananeWalaKaNaam = "Arpit Aware"
    return (
        <div>
            Chai Vala Saman aa gya hai
            <p>Chai Ke Kachra</p>
            <li>{kachra.item1}</li>
            <li>{kachra.item2}</li>
            <li>{kachra.item3}</li>
            <li>{kachra.item4}</li>
            <li>{kachra.item5}</li>
            <li>{kachra.item6}</li>
            <button onClick={() => {
                setChaiRedy(true)
                setName(bananeWalaKaNaam)
            }}>Bhej Do Chai</button>

        </div>
    )
}

export default Danka