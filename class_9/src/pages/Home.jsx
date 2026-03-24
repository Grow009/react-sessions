
import Card from '../components/Card'

function Home({ data, loade
  r, getItemFromCard, showbtn, setShowBtn }) {

  return (
    <div style={{ width: "100%" }}>
      <div className='wrappper'>
        {
          loader ? (<div>Data is loading</div>) : data?.map((item, index) => {
            return (
              <Card item={item}
                key={index}
                getItemFromCard={getItemFromCard}
                showbtn={showbtn}
                setShowBtn={setShowBtn}
              />)
          })
        }

      </div>
    </div>
  )
}

export default Home