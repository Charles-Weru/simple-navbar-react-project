import React, { useState } from "react";
import NavbarItems from "../navbarItem/navbaritem";
import data from "../../data";
import "./styles.css";

const Navbar = () => {
  const [items, setitems] = useState(data);
  return (
    <div className="navigation">
      <NavbarItems items={items} />
      
    </div>
  );
};

export default Navbar;
