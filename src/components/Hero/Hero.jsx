import React from "react";
import style from "./Hero.module.css";
import NavBar from "../NavBar/NavBar";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.navBarHero}>
        <NavBar />
      </div>
      <div className={style.totalHero}>
      <div className={style.title}>
        <h3>Juan Ubaldi </h3>
      </div>
      <div className={style.subtitle}>
        <h4>Front end developer.</h4>
      </div>
      </div>
      <div className={style.geographicTotal}>
      <div className={style.geographic}>
        <h6>Fort Louderdale Beach, Fl, EE. UU</h6>
        <h6>L: 23N 35W</h6>
      </div>
      </div>
    </div>
  );
};

export default Hero;
