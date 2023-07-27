import React from "react";
import "./_section1.scss";
import Content1 from "../content1/content1";

interface SectionProps {
  id: string;
  name: string;
}

export default function Section1() {
  return (
    <div className="section1">
      <Content1 />
    </div>
  );
}
