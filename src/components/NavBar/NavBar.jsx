import React from "react";
import style from "./NavBar.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.navBarContainer}>
      <div className={style.navBar}>
        <div className={style.links}>
        
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/aboutMe">
              <li>About Me</li>
            </Link>
            <Link to="/myInterest">
              <li>My Interest</li>
            </Link>
            <Link to="/contact">
              <li>Contacts</li>
            </Link>
            <Link to="/technologies">
              <li>tecnologioas</li>
            </Link>

            <Link to="/works">
              <li>Works</li>
            </Link>
          </ul>
        </div>
      
      </div>
    </div>
  );
};

export default NavBar;
