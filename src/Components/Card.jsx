import React from "react";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useGlobalStates } from './utils/global.context';



const Card = ({ name, username, id }) => {


  const [dentisSelected, setDentisSelected] = useState();
  const{setArray} = useGlobalStates()




 const url = `https://jsonplaceholder.typicode.com/users/${id}`;


 useEffect(() => {
   fetch(url)
     .then((res) => res.json())
     .then((data) => setDentisSelected(data));
 }, [url]);



  const addFav = () => {
    const array = JSON.parse(localStorage.getItem('myArray'));
  
      array.push(dentisSelected);
      localStorage.setItem('myArray', JSON.stringify(array));
      setArray(array);
    
  }
 console.log(dentisSelected)

  return (
    <div className="card">
        <Link key={id} to={`/dentist/${id}`} >

<div>
  <img className="card-img"  src="/images/doctor.jpg" alt="Doctor" width={200}/>
  <h3>{name}</h3>
  <h2>{username}</h2>
  
</div>

</Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
