import React from "react";
import "./section1.scss";
import { loremText } from "../../constants";
import Path from "../../assets/Path.png";
import Group from "../../assets/Group.png";

export default function Section1() {
  return (
    <div className="section1">
      <div className="section1__content">
        <div className="section1__content__text">
          <h1 className="section1__content__text__heading">
            Introduce Your Product Quickly & Effectively
          </h1>
          <span className="section1__content__text__description">
            {loremText}
          </span>
          <div className="section1__content__text__buttonContainer">
            <button className="section1__content__text__buttonContainer__buttonLeft">
              Purchase UI Kit
            </button>
            <button className="section1__content__text__buttonContainer__buttonRight">
              Learn more
            </button>
          </div>
        </div>
        {/* <img src={Group} alt="group" className="section1__content__bg" /> */}
      </div>
      <img src={Path} alt="path" className="section1__background"></img>
    </div>
  );
}
