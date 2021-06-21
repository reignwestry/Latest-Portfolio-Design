import React from 'react';
import { NavLink } from 'react-router-dom';


const Head = () => {
  return (  <div>
      <p>Reign Westry - Portfolio</p>
      <NavLink to="/" activeClassName="is-active">Home</NavLink>
      <NavLink to="/About" activeClassName="is-active">About</NavLink>
      <NavLink to="/Portfolio" activeClassName="is-active">Portfolio</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
    </div>
  );
};
export default Head;
