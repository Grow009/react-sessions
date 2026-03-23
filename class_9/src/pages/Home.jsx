import React from 'react'
import Card from '../components/Card'

function Home({ data, loader, getItemFromCard }) {
  return (
    <div  style={{ width: "100%" }}>
      <div className='wrappper'>
        {
          loader ? (<div>Data is loading</div>) : data?.map((item, index) => {
            return (<Card item={item} key={index} getItemFromCard={getItemFromCard} />)
          })
        }

      </div>
    </div>
  )
}

export default Home