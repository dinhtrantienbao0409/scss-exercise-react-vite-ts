import React, { useState, useEffect } from "react";
import { ReactComponent as UpIcon } from "../../assets/svg/upChevron.svg";
import "./scrollToTopButton.scss";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div
      className={`scrollBtn ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <UpIcon />
    </div>
  );
}
