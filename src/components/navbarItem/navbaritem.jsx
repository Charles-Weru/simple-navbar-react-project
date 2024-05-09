import React, { useState } from "react";
import "./styles.css";

const NavbarItems = ({ items }) => {
  const [active, setActive] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);

  const handleClick = (getIndex) => {
    setActive(getIndex);
    setIndicatorPosition(items[getIndex].position);
  };
  return (
    <ul>
      <span
        className="indicator"
        style={{ transform: `translateX(${indicatorPosition}px)` }}
      ></span>
      {items.map((item, index) => {
        const { title, icon } = item;
        return (
          <li key={index} className={`list`}>
            <a href="#" onClick={() => handleClick(index)}>
              <span className={`icon ${index === active ? "icon-active" : ""}`}>
                {icon}
              </span>
              <span className={`${active === index ? " active " : "text"}`}>
                {title}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarItems;
