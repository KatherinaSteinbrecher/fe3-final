import React from "react";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useGlobalStates } from './utils/global.context';

const Card = ({ name, username, id }) => {
  const [dentisSelected, setDentisSelected] = useState();

  const [myArray, setArray] = useState([]);
  const arrayExiste = localStorage.getItem("myArray");

  useEffect(() => {
    const data = JSON.parse(arrayExiste) || [];
    setArray(data);
  }, [arrayExiste]);

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDentisSelected(data));
  }, [url]);

  const addFav = () => {
    if (dentisSelected) {
      const array = JSON.parse(localStorage.getItem('myArray')) || [];
      const existeDentista = array.find((elemento) => elemento.id === dentisSelected.id);
      if (existeDentista) {
        console.log('No se puede agregar dentista ya existe');
      } else {
        array.push(dentisSelected);
        localStorage.setItem('myArray', JSON.stringify(array));
        setArray(array);
      }
    }
  }

  return (
    <div className="card">
      <img src="./images/doctor.jpg" alt='' width={200}/>
      <h1>{name}</h1>
      <h1>{id}</h1>
      <h2>{username}</h2>
      {<Link to={'/dentist/'+id}>Detail</Link>}
      <button onClick={() => addFav()} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
