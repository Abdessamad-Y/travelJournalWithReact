import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/navbar'
import Card from './Components/Card'
import data from './data'


function App() {
  const cards = data.map(item=>{
    return(
      <Card key = {item.key}
        {... item} />
    )
  })

  return (
    <>
      <Navbar />
      <div className='cards'>
        {cards}
      </div>
    </>
  )
}

export default App
