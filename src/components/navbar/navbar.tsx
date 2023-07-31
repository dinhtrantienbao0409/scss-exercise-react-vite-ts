import React, { useState, useRef, useEffect } from "react";
import "./navbar.scss";
import { navService } from "../../constants";
import { ReactComponent as ListIcon } from "../../assets/svg/list.svg";
import NavLink from "../navLink/navLink";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false);
      setIsDropdownOpen(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(window.scrollY);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <>
      <div
        className={`navbar ${isDropdownOpen ? "show-dropdown" : ""} ${
          visible ? "navbar-visible" : "navbar-hidden"
        }`}
      >
        <ul className="navbar__list">
          {navService &&
            navService.map((item) => <NavLink key={item.id} data={item} />)}
          <li className="navbar__list__toggleButton" onClick={toggleDropdown}>
            <ListIcon className="navbar__list__toggleButton__icon" />
          </li>
          {isDropdownOpen && (
            <div className="navbar__list__dropdown">
              <ul className="navbar__list__dropdown__service">
                {navService &&
                  navService.map((item) => (
                    <Link
                      key={item.id}
                      className="navbar__list__dropdown__service__item"
                      activeClass="active"
                      to={item.name}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {item.name}
                    </Link>
                    // <NavLink key={item.id} data={item} />
                  ))}
              </ul>
            </div>
          )}
        </ul>
        <h1 className="navbar__heading">Landing</h1>
        <button className="navbar__button">Buy now</button>
      </div>
    </>
  );
}
