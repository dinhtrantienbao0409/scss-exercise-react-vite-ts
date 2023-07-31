import React from "react";
import "./_pricing.scss";
import Rectangle from "../../assets/Rectangle.png";

export default function Pricing() {
  return (
    <div className="pricing">
      <div className="pricing__content">
        <h1 className="pricing__content__heading">A Price To Suit Everyone</h1>
        <span className="pricing__content__description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
          temporibus ex eveniet architecto in ratione debitis. Neque adipisci
          alias hic porro suscipit doloremque voluptates accusantium amet sit,
          non iste tenetur.
        </span>
        <div className="pricing__content__tag">
          <div>$40</div>
          <span>UI Design Kit</span>
        </div>
        <p>See, One price. Simple.</p>
        <button className="pricing__content__button">Purchase Now</button>
      </div>
      <img src={Rectangle} alt="rectangle" className="pricing__background" />
    </div>
  );
}
