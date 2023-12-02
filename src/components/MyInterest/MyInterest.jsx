import React from "react";
import style from "./MyInterest.module.css";
import NavBar from "../NavBar/NavBar";
const MyInterest = () => {
  return (
    <>
      <div className={style.myInterest}>
        <NavBar />
        <div className={style.myInterestWithoutNavBar}>
          <div className={style.myInterestLeft}>
            <div className={style.myInterestLeft1}>
              <div>
                <h3 className={style.h3Interest}>musica</h3>
                <img src="./music.svg" width={100} height={100} alt="" />
              </div>

              <div>
                <h3 className={style.h3Interest}>Playa</h3>
                <img src="./playa.svg" width={100} height={100} alt="" />
              </div>

              <div>
                <h3 className={style.h3Interest}>Viajes</h3>
                <img src="./fly.svg" width={100} height={100} alt="" />
              </div>
            </div>

            <div className={style.myInterestLeft2}>
              <div>
                <h3 className={style.h3Interest}>Tragos</h3>
                <img src="./tragos.svg" width={100} height={100} alt="" />
              </div>
              <div>
                <h3 className={style.h3Interest}>asado</h3>
                <img src="./asado.svg" width={100} height={100} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.myInterestCenter}>
          <img
            className={style.myInterestImg}
            src="./juancito.svg"
            width={300}
            height={500}
            alt=""
          />
        </div>
        <div className={style.myInterestRight}>
          <div className={style.myInterestRight1}>
            <div>
              <h3 className={style.h3Interest}> mascotas</h3>
              <img src="./animals.svg" width={100} height={100} alt="" />
            </div>
            <div>
              <h3 className={style.h3Interest}>mar</h3>
              <img src="./mar.svg" width={150} height={150} alt="" />
            </div>
            <div>
              <h3 className={style.h3Interest}>botanica</h3>
              <img src="./comida.svg" width={100} height={100} alt="" />
            </div>
          </div>
          <div>
            <div className={style.myInterestRight2}>
              <div>
                <h3 className={style.h3Interest}>botanica</h3>
                <img src="./cocinar.svg" width={100} height={100} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyInterest;
