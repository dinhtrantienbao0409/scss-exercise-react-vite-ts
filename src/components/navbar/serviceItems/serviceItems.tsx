import React from "react";
import { navService } from "../../../constants";

export default function ServiceItems() {
  return (
    <ul>
      {navService &&
        navService.map((item) => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
}
