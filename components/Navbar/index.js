import React from "react";
import "./style.scss";
import * as Scroll from "react-scroll";

function Navbar() {
  function handleClick(name) {
    Scroll.scroller.scrollTo(name, {
      duration: 500,
      delay: 50,
      smooth: true,
      offset: 0
    });
  }

  return (
    <nav>
      <ul>
        <li onClick={() => handleClick("description")}>Sobre mi</li>
        <li onClick={() => handleClick("experience")}>Experiencia</li>
        <h2>JG</h2>
        <li onClick={() => handleClick("articles")}>Articulos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;
