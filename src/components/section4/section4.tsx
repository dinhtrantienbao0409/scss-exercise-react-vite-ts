import React from "react";
import "./section4.scss";
import Image from "../../assets/undraw_social_influencer_sgsv.jpg";
import { loremText } from "../../constants";

export default function Section4() {
  return (
    <div className="section4">
      <div className="section4__content">
        <div>
          <h1>Light, Fast & Powerful</h1>
          <span>{loremText}</span>
        </div>
        <img src={Image} alt="sec4" className="section4__content__image" />
      </div>
    </div>
  );
}
