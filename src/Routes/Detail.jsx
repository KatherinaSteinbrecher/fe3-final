import React from 'react'
import { useState, useEffect } from "react";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useGlobalStates } from '../Components/utils/global.context';
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {dentist}=useGlobalStates

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams();
      
  const dentista = dentist.find((value) => params.id == value.id )
  
return (
   

    <div className='vista'>
      <h1>Detail Dentist {dentista.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      
          <p>{dentista.name}</p>
          <p>{dentista.email}</p>
          <p>{dentista.phone}</p>
          <p>{dentista.website}</p>
        

    </div>
  )
  
}

export default Detail