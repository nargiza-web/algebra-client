import React from 'react'
import {NavLink} from 'react-router-dom'


function Menu() {
  return(
    <div >
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" to="/home">LOGO</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/home" active >Home <span className="sr-only">(current)</span></NavLink>
        </li>
        
        <li className="nav-item">
        <NavLink className="nav-link" to="/about-us">About Us</NavLink>
      </li>
        
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Contents
          </NavLink>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink className="dropdown-item" to="/pre-algebra">Pre Algebra</NavLink>
            <NavLink className="dropdown-item" to="/algebra1">Algebra 1</NavLink>
            <NavLink className="dropdown-item" to="/geometry">Geometry</NavLink>
            <NavLink className="dropdown-item" to="/geometry">Algebra 2</NavLink>
            <NavLink className="dropdown-item" to="/pre-calculus">Pre Calculus</NavLink>
            <NavLink className="dropdown-item" to="/trigonometry">Trigonometry</NavLink>
            <NavLink className="dropdown-item" to="/statistics">Statistics</NavLink>
            <NavLink className="dropdown-item" to="/tsi">TSI</NavLink>
            <NavLink className="dropdown-item" to="/sat">SAT</NavLink>
            <NavLink className="dropdown-item" to="/ap-calculus-ab">AP Calculus AB</NavLink>
            <NavLink className="dropdown-item" to="/ap-calculus-bc">AP Calculus BC</NavLink>
            <div className="dropdown-divider"></div>
            <NavLink className="dropdown-item" to="/under-development">under development</NavLink>
          </div>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/support">Support Us</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> 
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
        </form>
        
      </ul>

    </div>
    
    </nav>
    
    </div>
  )
}

export default Menu