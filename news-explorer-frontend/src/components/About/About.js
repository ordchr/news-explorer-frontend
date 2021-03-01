import React, { useEffect } from "react";
import "./About.css";
import AboutAvatar from '../../images/about.png';

function About() {
  return (
    <div className="about">
      <img className="about__avatar" src={ AboutAvatar } alt="about avatar" />
      <div className="about__description">
        <h2 className="about__description-title">
          Об авторе
        </h2>
        <p className="about__description-text">
          Это блок с описанием автора проекта. Здесь следует указать, как вас зовут,
          чем вы занимаетесь, какими технологиями разработки владеете.
        </p>
        <p className="about__description-text">
           Также можно рассказать о процессе обучения в Практикуме,
          чему вы тут научились, и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </div>
  );
}

export default About;
