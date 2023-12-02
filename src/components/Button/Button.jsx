import React from "react";
import style from "./Button.module.css";

const Button = ({ children }) => {
  return (
    <div>
      <button className={style.button}>{children}</button>{" "}
    </div>
  );
};

export default Button;
