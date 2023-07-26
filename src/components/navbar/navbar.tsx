import React from "react";
import ServiceItems from "./serviceItems/serviceItems";

export default function Navbar() {
  return (
    <>
      <div>
        <ServiceItems />
        <h1>Landing</h1>
        <button>Buy now</button>
      </div>
    </>
  );
}
