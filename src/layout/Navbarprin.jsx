import { NavLink } from "react-router-dom";

import pokebola from '../assets/imgs/pokeball.png'
const Navbarprin = () => {

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");

  return (
    <>
      <div className="navbar">
        <div>
          <img className="img_bola" src={pokebola}></img>
        </div>
        <div className="nav_titulo">
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        {" - "}
        <NavLink className={setActiveClass} to="/pokemones">
          Pokemones
        </NavLink>
        </div>
      </div>


    </>
  )

}

export default Navbarprin;