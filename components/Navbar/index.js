import React from "react";
import "./style.scss";
import * as Scroll from "react-scroll";

function Navbar(props) {
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
        {props.samePage ? (
          <React.Fragment>
            <li onClick={() => handleClick("description")}>Sobre mi</li>
            <li onClick={() => handleClick("experience")}>Experiencia</li>
            <h2>JIG</h2>
            <li onClick={() => handleClick("articles")}>Articulos</li>
            <li onClick={() => handleClick("talks")}>Charlas</li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <a href="/">
              <li>Sobre mi</li>
            </a>
            <a href="/">
              <li onClick={() => handleClick("experience")}>Experiencia</li>
            </a>
            <h2>JIG</h2>
            <a href="/">
              <li onClick={() => handleClick("articles")}>Articulos</li>
            </a>
            <li onClick={() => handleClick("talks")}>Charlas</li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
