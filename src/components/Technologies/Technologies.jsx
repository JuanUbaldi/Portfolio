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
          <img src="./redux.svg" width={120} height={120} alt="" />
          <img src="./javascript.svg" width={120} height={120} alt="" />
          <img src="./next.svg" width={120} height={120} alt="" />
          <img src="./scrum.svg" width={120} height={120} alt="" />
          <img src="./mongo.svg" width={120} height={120} alt="" />
          <img src="./tailwind.svg" width={120} height={120} alt="" />
          <img src="./bootstrap.svg" width={120} height={120} alt="" />
          <img src="./figma.svg" width={120} height={120} alt="" />
          <img src="./git.svg" width={120} height={120} alt="" />

          <img src="./sql.ico" width={120} height={120} alt="" />
          <img src="./react.svg" width={120} height={120} alt="" />
          <img src="./css.svg" width={120} height={120} alt="" />
          <img src="./html.svg" width={120} height={120} alt="" />
          <img src="./express.svg" width={120} height={120} alt="" />
        </div>
      </div>
    </>
  );
};

export default Technologies;
