import React from "react";
import Article from "../Article";
import style from "./style.scss";

function Articles() {
  const articles = [
    {
      title: "Cambio de carrera: Empezando a programar",
      desc:
        "Hacer un cambio de carrera es algo que puede resultar intimidante y difícil de llevar a cabo. En este post quiero contarte los desafíos que encontré al ayudar a muchas personas a realizar este cambio.",
      img:
        "https://courseit.com.ar/blog/content/images/size/w1000/2019/12/careerchange-1.png",
      link: "https://courseit.com.ar/blog/cambio-de-carrera-programacion/",
    },
    {
      title: "¿Por qué estudiar en CourseIt?",
      desc:
        "Desde CourseIt creemos que los aspectos importantes a la hora de elegir donde estudiar son: Calidad del contenido y profesionales, herramientas para facilitar nuestro aprendizaje y precio por lo que en este articulo quiero contarte cual es nuestra propuesta para que tengas un aprendizaje eficiente.",
      img:
        "https://courseit.com.ar/blog/content/images/size/w2000/2019/12/porquecourseit.jpg",
      link: "https://courseit.com.ar/blog/por-que-estudiar-en-courseit/",
    },
    {
      title: "¿Cómo agregarle darkmode a tu web?",
      desc:
        'Hace ya un tiempo muchas aplicaciones empezaron a sacar una funcionalidad llamada "darkmode", la cual cambia el tema de la web o aplicación a fondos oscuros y letras claras. En este post vas a aprender a implementarlo',
      img:
        "https://courseit.com.ar/blog/content/images/size/w2000/2020/01/darkmode-1.png",
      link: "https://courseit.com.ar/blog/como-sumarle-darkmode-a-tu-web/",
    },
    {
      title: "¿Por qué aprender a programar?",
      desc:
        "Desde hace ya varios años, la tecnología tiene un gran impacto en la vida de las personas y gracias a esto se popularizaron muchas carreras y cursos relacionadas con la programación. Pero, ¿cuales son las ventajas y beneficios de aprender programación?",
      img:
        "https://courseit.com.ar/blog/content/images/size/w1000/2019/03/2learn-to-code.png",
      link:
        "https://courseit.com.ar/blog/por-que-aprender-a-programar/?utm_source=web_juani",
    },
    {
      title: "Ingeniería y arquitectura detrás de los desafíos",
      desc:
        "Hace poco tiempo, en CourseIt sacamos una nueva sección llamada desafíos la cual se basa en una serie de pruebas principalmente algorítmicas que los usuarios pueden resolver para mejorar su nivel en el",
      img:
        "https://courseit.com.ar/blog/content/images/size/w1000/2019/09/portrait-5.png",
      link:
        "https://courseit.com.ar/blog/ingenieria-y-arquitectura-detras-de-los-desafios/?utm_source=web_juani",
    },
    {
      title: "5 Tips para aprender programación",
      desc:
        "Aprender a programar puede ser frustrante. Para ayudarte a que no lo sea, te dejamos 5 tips para acelerar tu aprendizaje.",
      img:
        "https://courseit.com.ar/blog/content/images/size/w1000/2019/03/tipsandtricks.png",
      link:
        "https://courseit.com.ar/blog/tips-para-aprender-programacion/?utm_source=web_juani",
    },
  ];
  return (
    <div className={style.articlesContainer}>
      <h4>Articulos</h4>
      <div className={style.articlesContentContainer}>
        {articles.map((article, key) => {
          return (
            <Article
              title={article.title}
              description={article.desc}
              img={article.img}
              link={article.link}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Articles;
