import React from "react";
import style from "./style.scss";

function Article(props) {
  return (
    <a className={style.link} href={props.link} target="_blank">
      <div className={style.articleContainer}>
        <img src={props.img} />
        <div className={style.content}>
          <h5>{props.title}</h5>
        </div>
      </div>
    </a>
  );
}

export default Article;
