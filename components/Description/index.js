import React from "react";
import style from "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Description() {
  return (
    <div className={style.descriptionContainer}>
      <div className={style.contentContainer}>
        <h1>¡Hola! Mi nombre es Juani Gallo</h1>
        <h4>
          Y soy un desarrollador web de Buenos Aires, Argentina, apasionado por
          la performance, las nuevas tecnologias y unir el mundo online con el
          offline
        </h4>
        <div className={style.socialContainer}>
          <a href="https://twitter.com/JuaniGallo" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className={style.icon} />
          </a>
          <a href="https://github.com/juanigallo" target="_blank">
            <FontAwesomeIcon icon={faGithub} className={style.icon} />
          </a>
          <a href="https://www.linkedin.com/in/juangallo/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className={style.icon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Description;
