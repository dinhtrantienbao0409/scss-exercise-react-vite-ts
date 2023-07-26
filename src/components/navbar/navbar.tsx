import React, { useState, useRef, useEffect } from "react";
import "./_navbar.scss";
import { navService } from "../../constants";
import { ReactComponent as ListIcon } from "../../assets/svg/list.svg";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  // useEffect(() => {
  //   function handleClickOutside(e: MouseEvent) {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(e.target as Node)
  //     ) {
  //       setIsDropdownOpen(false);
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);
  return (
    <>
      <div className={`navbar ${isDropdownOpen ? "show-dropdown" : ""}`}>
        <ul className="navbar__list">
          {navService &&
            navService.map((item) => (
              <li className="navbar__list__item" key={item.id}>
                {item.name}
              </li>
            ))}
          <li className="navbar__list__toggleButton" onClick={toggleDropdown}>
            <ListIcon className="navbar__list__toggleButton__icon" />
          </li>
          {isDropdownOpen && (
            <div className="navbar__dropdown">
              <ul>
                {navService &&
                  navService.map((item) => <li key={item.id}>{item.name}</li>)}
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
