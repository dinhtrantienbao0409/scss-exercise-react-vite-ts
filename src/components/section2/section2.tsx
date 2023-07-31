import React from "react";
import Image from "../../assets/undraw.jpg";
import { loremText } from "../../constants";
import "./section2.scss";
import { ReactComponent as Icon } from "../../assets/svg/sec2-icon.svg";

export default function Section2() {
  return (
    <div className="section2">
      <div className="section2__content">
        <div className="section2__content__left">
          <h1 className="section2__content__left__heading">
            Light, Fast & Powerful
          </h1>
          <span className="section2__content__left__description">
            {loremText}
          </span>
          <div className="section2__content__left__feature">
            <div>
              <Icon className="section2__content__left__feature__icon" />
              <h1>Title Goes Here</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                maxime veritatis, ullam, corporis voluptas enim architecto quas
                i
              </span>
            </div>
            <div>
              <Icon className="section2__content__left__feature__icon" />
              <h1>Title Goes Here</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                maxime veritatis, ullam, corporis voluptas enim architecto quas
                i
              </span>
            </div>
          </div>
        </div>
        <img src={Image} alt="sec2" className="section2__content__image" />
      </div>
    </div>
  );
}
