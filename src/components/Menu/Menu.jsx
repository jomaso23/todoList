import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Link to="/">|| HOME |</Link>
      <Link to="/About">| ABOUT |</Link>
      <Link to="/Login&Register">| LOGIN ||</Link>
    </div>
  );
};

export default Menu;
