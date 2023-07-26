import React from "react";
import "./_content1.scss";

export default function Content1() {
  return (
    <div className="content1">
      <div className="content1__text">
        <h1 className="content1__text__heading">
          Introduce Your Product Quickly & Effectively
        </h1>
        <span className="content1__text__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
          in temporibus! Necessitatibus cum nobis molestiae, exercitationem,
          velit quibusdam provident error voluptatem, vero iure voluptatum
          officiis pariatur ut quas quaerat architecto?
        </span>
        <div className="content1__text__buttonContainer">
          <button className="content1__text__buttonContainer__buttonLeft">
            Purchase UI Kit
          </button>
          <button className="content1__text__buttonContainer__buttonRight">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
