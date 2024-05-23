import React from "react";
import NavLink from "./nav-link";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="grid grid-cols-2 gap-2 py-4 items-center text-center p-5">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;