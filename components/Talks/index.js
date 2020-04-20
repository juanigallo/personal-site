import React from "react";
import Talk from "../Talk";
import style from "./style.scss";

function Talks() {
  const talks = [
    {
      title: "CourseIt Sessions: Entrevistas técnicas",
      img: "https://courseit.com.ar/static/sessions/covers/interview.jpg",
      link: "https://youtu.be/EptmY3FiXs4",
    },
    {
      title: "CourseIt Sessions: Primeras entrevistas laborales",
      img:
        "https://courseit.com.ar/static/sessions/covers/first-experiences.png",
      link: "https://youtu.be/8uVJoLpm5fA",
    },
    {
      title: "Woman who code: ¿En que lo programo?",
      img: "https://courseit.com.ar/static/sessions/covers/trabajo-remoto.png",
      link: "https://youtu.be/4TVEX2aHu3M",
    },
    {
      title: "freeCodeCamp: Cache: cuándo, cómo y por qué",
      img: "https://courseit.com.ar/static/sessions/covers/deploy-now.png",
      link: "https://youtu.be/bHLEOAyC_wk",
    },
    {
      title: "CourseIt Sessions: Cuanto gana un programador en 2020",
      img: "https://courseit.com.ar/static/sessions/covers/sueldos-2020.png",
      link: "https://youtu.be/gVXvA2CUfFA",
    },
    {
      title: "CourseIt Sessions: JRs en empresas",
      img: "https://courseit.com.ar/static/sessions/covers/jrs-empresas.png",
      link: "https://youtu.be/esTUVD3Vl34",
    },
  ];
  return (
    <div className={style.articlesContainer}>
      <h4>Charlas</h4>
      <div className={style.articlesContentContainer}>
        {talks.map((talk, key) => {
          return (
            <Talk
              title={talk.title}
              description={talk.desc}
              img={talk.img}
              link={talk.link}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Talks;
