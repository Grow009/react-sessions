
import { useContext } from 'react'
import Card from '../components/Card'
import { IContext } from '../context/CardContext'
import { useEffect } from 'react'
function Home() {

  const { data, loader,ApiForCard } = useContext(IContext)

  useEffect(() => {
    ApiForCard("https://fakestoreapi.com/products")
  }, [])

  // { data, loader, getItemFromCard, showbtn, setShowBtn }
  console.log("Home pages")

  return (
    <div style={{ width: "100%" }}>
      <div className='wrappper'>
        {
          loader ? (<div>Data is loading</div>) : data?.map((item, index) => {
            return (
              <Card item={item}
                key={index}

              />)
          })
        }

      </div>
    </div>
  )
}

export default Home