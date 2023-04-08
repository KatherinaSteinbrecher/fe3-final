
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import { routes } from './routes'
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
//import { Route, Routes} from 'react-router-dom'//

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path={routes.home} element={<Home/>}/> 
        <Route path={routes.contact} element={<Contact/>}/> 
        <Route path={routes.detail} element={<Detail/>}/> 
        <Route path={routes.favs} element={<Favs/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
