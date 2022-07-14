import React from 'react';
import { NavLink } from "react-router-dom";
import { Stack } from 'react-bootstrap';
import Logo from '../img/logo.svg';

export default function Header({showRegistration, showLogin}) {
  const headerHeight = 70;
  return (
    <header>
      <Stack  direction="horizontal" gap={3} className="header p-3 pe-5 no-select" style={{height: headerHeight+"px"}}>
        <div className="align-self-center me-auto">
          <img src={Logo} alt="Deloitte Logo" height="40"  />
        </div>
        {showRegistration && <div className="fs-4">
          <NavLink to="/registration" className="text-decoration-none">Registration</NavLink>
        </div>}
        {showLogin && <div className="fs-4">
          <NavLink to="/login" className="text-decoration-none">Login</NavLink>
        </div>}
      </Stack>
      <div style={{ height: headerHeight+"px" }}></div>
    </header>
  )
}

