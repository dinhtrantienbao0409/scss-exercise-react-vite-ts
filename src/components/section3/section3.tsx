import React from "react";
import "./section3.scss";
import Image from "../../assets/undraw_happy_news_hxmt.jpg";
import { loremText } from "../../constants";

export default function Section3() {
  return (
    <div className="section3">
      <div className="section3__content">
        <div>
          <h1>Light, Fast & Powerful</h1>
          <span>{loremText}</span>
        </div>
        <img src={Image} alt="sec3" className="section3__content__image" />
      </div>
    </div>
  );
}
