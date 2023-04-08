import React from 'react'
import { routes } from '../routes'
import { Link } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {


  return (
    <nav className=' '>
      {<Link to={routes.home} >Home</Link>}
      {<Link to={routes.contact}>Contact</Link>}
      {<Link to={routes.favs}>Favorites</Link>}
    </nav>
  )
}
export default Navbar