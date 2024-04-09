import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar=(auth)=>{
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light shadow">
  <div class="container">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div style={{textAlign:'left'}}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item me-3">
                <NavLink className="nav-link" activeClassName="active" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link" activeClassName="active" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link" activeClassName="active" to="/Services">
                  Features
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link" activeClassName="active" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            </div>

        
      <NavLink class="navbar-brand fw-bolder fs-4 mx-auto" to="/">HealthCare</NavLink>
      {auth? (
      <>
      <NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill"><i className="fa fa-sign-in me-2"></i>Login</NavLink>
      <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill">Register</NavLink>
      </>
       ) :(
      <>
      </>
      )}
    </div>
  </div>
</nav>
        </div>
    );
}
export default Navbar;