import React from "react";
import "./_footer.scss";
import { navService } from "../../constants";
import { ReactComponent as FacebookIcon } from "../../assets/svg/facebookIcon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/svg/linkedinIcon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitterIcon.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/svg/youtubeIcon.svg";
import { ReactComponent as InstaIcon } from "../../assets/svg/instaIcon.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__topContent">
        <span>@2023 YourCompany</span>
        <h1 className="footer__topContent__heading">Landing</h1>
        <button className="footer__topContent__button">Buy now</button>
      </div>
      <div className="footer__line" />
      <div className="footer__botContent">
        <ul className="footer__botContent__list">
          {navService &&
            navService.map((item) => (
              <li className="footer__botContent__list__item" key={item.id}>
                {item.name}
              </li>
            ))}
        </ul>
        <div className="footer__botContent__socialIcon">
          <FacebookIcon className="footer__botContent__socialIcon__item" />
          <LinkedinIcon className="footer__botContent__socialIcon__item" />
          <TwitterIcon className="footer__botContent__socialIcon__item" />
          <YoutubeIcon className="footer__botContent__socialIcon__item" />
          <InstaIcon className="footer__botContent__socialIcon__item" />
        </div>
      </div>
    </div>
  );
}
