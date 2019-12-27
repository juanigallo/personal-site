import React from "react";
import style from "./style.scss";

function Description() {
  return (
    <div className={style.descriptionContainer}>
      <div className={style.contentContainer}>
        <h3>¡Hola! Mi nombre es Juani Gallo</h3>
        <h4>
          Y soy un desarrollador web de Buenos Aires, Argentina, apasionado por
          la performance, las nuevas tecnologias y unir el mundo online con el
          offline
        </h4>
      </div>
    </div>
  );
}

export default Description;
