import React from "react";
import style from "./AboutMe.module.css";
import NavBar from "../NavBar/NavBar";
const AboutMe = () => {
  return (
    <>
      <div className={style.aboutMe}>
        <div className={style.navBarHero}>
          <NavBar />
        </div>
        <div className={style.aboutMeTotal}>
          <div className={style.aboutMeLeft}>
            <div className={style.aboutMeLeftText}>
              <h2 className={style.aboutMeH1}>yo:</h2>
              <h4>
                Hola, soy Juan Ubaldi. Un desarrollador web, médico de profesion
                que siempre busca ampliar sus horizontes. Tal es así que decidi
                inmersionar en el mumdo de la tecnologia habiendome formado en
                primera instancia en un campo tan diferente bcomo el de la salud
              </h4>
              <h4>
                Comence mis estudios en medicina por el año 2010. En 2018
                comence mi residencia en Anatomia patologica y en el año 2022,
                consegui mi titulo de especialista
              </h4>
              <h4>
                Por otro lado, la vida me presento al area de la tecnologia,
                como un nuevo horizonte a conocer, a explorar. A finales del
                2021 di mis primeros paso en mi formacion como desarrollador,
                proceso que no ceso ni un segundo hasta el dia de hoy y que
                seguira asi por mucho tiempo
              </h4>
              <h4>
                Hechale una mirada a mi portfolio, para conocer una pequeñla
                parte de mi mundo, y demostarte como con empeño y dedicacion
                podemos generar logros que al principios pensamos eran
                impensados
              </h4>
            </div>
          </div>
          <div className={style.aboutMeRight}>
            <img src="./juan.jpeg" className={style.aboutMeRightImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
