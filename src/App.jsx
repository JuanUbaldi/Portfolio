import style from "./App.module.css";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import { Routes, Route, useLocation } from "react-router-dom";
import Technologies from "./components/Technologies/Technologies";

import Works from "./components/Works/Works";
import AboutMe from "./components/AboutMe/AboutMe";
import MyInterest from "./components/MyInterest/MyInterest";
import Detail from "./components/Detail/Detail";


function App() {
 
  return (
    <>
      <div className={style.app}>
       
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/myInterest" element={<MyInterest />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/technologies" element={<Technologies />} />

          <Route path="/works/detail/:id" element={<Detail />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
