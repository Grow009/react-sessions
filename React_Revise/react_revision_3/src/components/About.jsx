

function About({ inUser, getDataFromAbout }) {
  console.log(inUser)


  const arr = [1, 2, 3, 4]
  return (
    <div>
      About
      <button onClick={() => {
        getDataFromAbout(arr)
      }}>send data</button>

    </div>
  )
}

export default About