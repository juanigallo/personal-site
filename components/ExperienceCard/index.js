import React from "react";
import style from "./style.scss";

function ExperienceCard(props) {
  const { name, role, from, to, logo } = props;
  return (
    <div className={style.experienceCardContainer}>
      <div className={style.imgContainer}>
        <img src={logo} />
        {name && <h5>{name}</h5>}
      </div>
      <p className={style.date}>
        {from} - {to}{" "}
      </p>
      <p>{role}</p>
    </div>
  );
}

export default ExperienceCard;
