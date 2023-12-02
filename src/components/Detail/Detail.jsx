import React from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import detailVideo from "../../assets/assets";


const Detail = () => {
  let params = useParams();
  let id = params.id;

  const objetDetail = detailVideo(id);

  return (
    <>
     
      <div className={style.bgStars}>
        <video width={740} controls>
          <source src={objetDetail.video} type="video/mp4" />
        </video>

        <div>{objetDetail.titulo}</div>
        <div>{objetDetail.descripcion}</div>
        <div>{objetDetail.Tecnologias}</div>
        {objetDetail.video}
      </div>
    </>
  );
};

export default Detail;
