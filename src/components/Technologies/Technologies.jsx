import React from "react";
import style from "./Technologies.module.css";

import NavBar from "../NavBar/NavBar";


const Technologies = () => {
  return (
    <>
      <div className={style.technologies}>
        <div className={style.navBarTech}>
          <NavBar />
        </div>
        <div className={style.techsSingle}>
       
        </div>
      </div>
    </>
  );
};

export default Technologies;
