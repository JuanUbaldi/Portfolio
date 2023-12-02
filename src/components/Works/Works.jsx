import React from "react";
import style from "./Works.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Works = () => {
  return (
    <div className={style.works}>
      <NavBar />
      <div className={style.container}>
        <div className={style.evento}>
          <div className={style.foto}>
            <img src="./elBesugo.png" alt="" />
          </div>
          <h3 className={style.fecha}>9 de Enero de 2021</h3>
          <Link to="/works/detail/1">
            <Button>ver</Button>
          </Link>
        </div>

        <div className={style.evento}>
          <div className={style.foto}>
            <img src="./puntoHamburguesa.png" alt="" />
          </div>
          <h3 className={style.fecha}>3 de Febrero de 2021</h3>
          <Link to="detail/2">
            <Button>ver</Button>
          </Link>
        </div>

        <div className={style.evento}>
          <div className={style.foto}>
            <img src="./tiendaReact.png" alt="" />
          </div>
          <h3 className={style.fecha}>7 de Junio de 2022</h3>

          <Link to="detail/3">
            <Button>ver</Button>
          </Link>
        </div>

        <div className={style.evento}>
          <div className={style.foto}>
            <img src="./task.png" alt="" />
          </div>
          <h3 className={style.fecha}>18 de Agosto de 2023</h3>
          <Link to="detail/4">
            <Button>ver</Button>
          </Link>
        </div>

        <div className={style.evento}>
          <div className={style.foto}>
            <img src="./rick.png" alt="" />
          </div>
          <h3 className={style.fecha}>26 de Noviembre de 2024</h3>
          <Link to="detail/5">
            <Button>ver</Button>
          </Link>
        </div>

        <div className={style.evento}>
          <div className={style.foto}>
            <img src="./dogs.png" alt="" />
          </div>
          <h3 className={style.fecha}>7 de Diciembre de 2021</h3>
          <Link to="detail/6">
            <Button>ver</Button>
          </Link>
        </div>
        <div className={style.evento}>
          <div className={style.foto}>
            <img src="./jenshy.png" alt="" />
          </div>
          <h3 className={style.fecha}>7 de Diciembre de 2021</h3>
          <Link to="detail/7">
            <Button>ver</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Works;
