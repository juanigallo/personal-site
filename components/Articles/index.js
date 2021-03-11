import React from "react";
import Article from "../Article";
import style from "./style.scss";

function Articles() {
  const articles = [
    {
      title: "Hard work vs Smart work",
      desc:
        "Desde CourseIt creemos que los aspectos importantes a la hora de elegir donde estudiar son: Calidad del contenido y profesionales, herramientas para facilitar nuestro aprendizaje y precio por lo que en este articulo quiero contarte cual es nuestra propuesta para que tengas un aprendizaje eficiente.",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/blogStatics/nofoto-blog.png",
      link: "https://courseit.io/articulo/hard-work-vs-smart-work-urhou8rrb"
    },
    {
      title: "Reconstruyendo el proceso de entrevistas de tu empresa",
      desc: "",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/blogStatics/nofoto-blog.png",
      link:
        "https://blog.juanigallo.com/reconstruyendo-el-proceso-de-entrevistas-de-tu-empresa/"
    },
    {
      title: "Limpiando nuestro código: Destructuring assignment",
      desc:
        'En este articulo vamos a estar hablando sobre una de las mejores funcionalidades que se implementaron en ES6 (Ecmascript 2015), Destructuring assignment o su horrenda traducción: "Asignación desestructurante".',
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/blogStatics/nofoto-blog.png",
      link:
        "https://courseit.io/articulo/limpiando-nuestro-codigo-destructuring-assignment-y3okndrpu"
    },
    {
      title: "5 Tips para aprender programación",
      desc:
        "Aprender a programar puede ser frustrante. Para ayudarte a que no lo sea, te dejamos 5 tips para acelerar tu aprendizaje.",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/blogStatics/nofoto-blog.png",
      link:
        "https://courseit.io/articulo/5-tips-para-aprender-programacion-gppxmvubx?niceUrl=5-tips-para-aprender-programacion-gppxmvubx"
    },
    {
      title: "¿Qué es un algoritmo?",
      desc:
        "Resolver algoritmos es una de las cosas que mas cuesta cuando empieza a aprender lógica dentro del mundo de la programación. Esto se debe a que la forma de pensar y resolver problemas de un ser humano y de una computadora difieren en varios aspectos.",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/blogStatics/nofoto-blog.png",
      link: "https://courseit.io/articulo/que-es-un-algoritmo-a2vfiw9dm"
    },
    {
      title: "5 tips para mejorar en la resolución de algoritmos",
      desc:
        "Resolver algoritmos es una de las cosas que mas cuesta cuando empieza a aprender lógica dentro del mundo de la programación. Esto se debe a que la forma de pensar y resolver problemas de un ser humano y de una computadora difieren en varios aspectos.",
      img:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/blogStatics/nofoto-blog.png",
      link:
        "https://courseit.io/articulo/5-tips-para-mejorar-en-la-resolucion-de-algoritmos-ohkibezm8"
    }
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
