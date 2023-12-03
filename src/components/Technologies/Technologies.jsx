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
        <div className={style.techsTotal}>
          <div className={style.techsSingle}>
            <h3 className={style.techH3}>REDUX</h3>
            <img src="./redux.svg" width={120} height={120} alt="" />
          </div>
          <div className={style.techsSingle}>
            <h3 className={style.techH3}>JAVASCRIPT</h3>
            <img src="./javascript.svg" width={120} height={120} alt="" />
          </div>
          <div className={style.techsSingle}>
            <h3 className={style.techH3}>NEXT JS</h3>
            <img src="./next.svg" width={120} height={120} alt="" />
          </div>
          <div className={style.techsSingle}>
            <h3 className={style.techH3}>SCRUM</h3>
            <img src="./scrum.svg" width={120} height={120} alt="" />
          </div>
          <div className={style.techsSingle}>
            <h3 className={style.techH3}>MONGO</h3>
            <img src="./mongo.svg" width={120} height={120} alt="" />
          </div>
          <div className={style.techsSingle}>
            <h3 className={style.techH3}>TAILWIND</h3>
            <img src="./tailwind.svg" width={120} height={120} alt="" />
          </div>
          <div className={style.techsSingle}>
            <h3 className={style.techH3}>BOOTSTRAP</h3>
            <img src="./bootstrap.svg" width={120} height={120} alt="" />
          </div>
          <div className={style.techsSingle}>
            <h3 className={style.techH3}>FIGMA</h3>
            <img src="./figma.svg" width={120} height={120} alt="" />
          </div>
          <div className={style.techsSingle}>
            <h3 className={style.techH3}>GIT</h3>
            <img src="./git.svg" width={120} height={120} alt="" />
          </div>
          <div className={style.techsSingle}>
            <h3 className={style.techH3}>GITHUB</h3>
            <img src="./github.svg" width={120} height={120} alt="" />
          </div>
          <div className={style.techsSingle}>
            <h3 className={style.techH3}>FIREBASE</h3>
            <img src="./firebase.svg" width={120} height={120} alt="" />
          </div>

          <div className={style.techsSingle}>
            <h3 className={style.techH3}>SQL</h3>
            <img src="./sql.ico" width={120} height={120} alt="" />
          </div>
          <div className={style.techsSingle}>
            <h3 className={style.techH3}>REACT</h3>
            <img src="./react.svg" width={120} height={120} alt="" />
          </div>
          <div className={style.techsSingle}>
            <h3 className={style.techH3}>CSS</h3>
            <img src="./css.svg" width={120} height={120} alt="" />
          </div>
          <div className={style.techsSingle}>
            <h3 className={style.techH3}>HTML</h3>
            <img src="./html.svg" width={120} height={120} alt="" />
          </div>
          <div className={style.techsSingle}>
            <h3 className={style.techH3}>EXPRESS</h3>
            <img src="./express.svg" width={120} height={120} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
