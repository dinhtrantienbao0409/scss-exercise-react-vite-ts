import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navLink.scss";
interface NavLinkProps {
  className: string;
  activeClass: "active";
  to: string;
  key: string;
  spy: boolean;
  smooth: boolean;
  duration: number;
}

export default function NavLink(data: any) {
  const [visible, setVisible] = useState(true);

  return (
    <Link
      className="navLink"
      key={data.data.id}
      activeClass="active"
      to={data.data.name}
      spy={true}
      smooth={true}
      duration={500}
    >
      {data.data.name}
    </Link>
  );
}
