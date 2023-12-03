import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./Contact.module.css";
import Button from "../Button/Button";
import NavBar from "../NavBar/NavBar";

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_im8dt5k",
        "template_j9alxck",
        ref.current,
        "3ouZkudz0gecNQdag"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div className={style.contact}>
      <NavBar />
      <div className={style.contactAll}>
        <div className={style.contactLeft}>
          <form ref={ref} onSubmit={handleSubmit}>
            <h3>Do you want to contact me?</h3>
            <input placeholder="Name" name="name" type="text" />
            <input placeholder="Email" name="email" type="text" />
            <textarea
              placeholder="Write your message"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <Button type="submit"> send </Button>
            {success && "your message has been sent succesfully :)"}
          </form>
        </div>
        <div className={style.contactRight}>
          <img className={style.imgSA} src="./southAmerica.png" width={700} height={700} alt="" />
          <div className={style.contactRightText}>
            <h4>Necochea, Pcia de Bs. As., Republica Argentina</h4>
            <h4> Lat 38 55 Long 55 38</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
