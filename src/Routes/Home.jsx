import React from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import {useGlobalStates} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentist} = useGlobalStates()

  return (
    <main>
      
      <h1>Home</h1>
      <div className='card-grid'>
      {dentist.map((item) => <Card key = {item.id} name = {item.name} username = {item.username} id={item.id}/>)}
        {/* Aqui deberias renderizar las cards */} 
      </div>
    
    </main>
  )
}

export default Home