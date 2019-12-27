import React from "react";
import style from "./style.scss";
import experience from "../../data/experience.json";
import ExperienceCard from "../ExperienceCard";

function Experience() {
  return (
    <div className={style.experienceContainer}>
      <h4>Experiencia</h4>
      <div className={style.experienceContentContainer}>
        <div className={style.line} />
        <div className={style.verticalLine} />
        <div className={style.secondLine} />
        {experience.map((experience, key) => {
          return (
            <ExperienceCard
              name={experience.name}
              role={experience.role}
              from={experience.from}
              to={experience.to}
              description={experience.description}
              logo={experience.logo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
