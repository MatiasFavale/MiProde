import React from "react";
import { NavLink } from "react-router-dom";

const HeaderAdmin = () => {
  const activeStyle = { color: "red" };
  return (
    
    <nav>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink className="nav-link px-2" to="/" activeStyle={activeStyle} exact>
                  Home
                </NavLink>
              </li>
              <li>
              <NavLink className="nav-link px-2" to="/fixture" activeStyle={activeStyle}>
                Prode
              </NavLink>
              </li>
              <li>
              <NavLink className="nav-link px-2" to="/player" activeStyle={activeStyle}>
                Jugadores
              </NavLink>
              </li>
              <li>
              <NavLink className="nav-link px-2" to="/champion" activeStyle={activeStyle}>
                Campeon
              </NavLink>
              </li>
              <li>
              <NavLink className="nav-link px-2" to="/resultados" activeStyle={activeStyle}>
                Resultados
              </NavLink>
              </li>

              <li>
              <NavLink className="nav-link px-2" to="/posiciones" activeStyle={activeStyle}>
                Posiciones
              </NavLink>
              </li>

              <li>
              <NavLink className="nav-link px-2" to="/rankings" activeStyle={activeStyle}>
                Ranking
              </NavLink>
              </li>

              <li>
              <NavLink className="nav-link px-2" to="/playerssave" activeStyle={activeStyle}>
                jugador
              </NavLink>
              </li>

            </ul>


            <div className="text-end">
              
              <NavLink className="btn btn-warning" to="/register" activeStyle={activeStyle}>
                Sign Out
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </nav>
    
    
  )
};


export default HeaderAdmin;
