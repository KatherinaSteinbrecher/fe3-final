import React from "react";
import Card from "../Components/Card";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const fav =  JSON.parse(localStorage.getItem("myArray"))
  console.log (fav)

  //const limpiarFav = () =>{setArray(localStorage.setItem("myArray", JSON.stringify([])))}

  return (
    <>
      <h1>Dentist Favs</h1>
      <div className="card-grid">
      {fav.map((fav) =>
        
        <Card  key={fav.id} name={fav.name} username={fav.username} id={fav.id} />
      
    )}
      </div>
    </>
  );
};

export default Favs;
