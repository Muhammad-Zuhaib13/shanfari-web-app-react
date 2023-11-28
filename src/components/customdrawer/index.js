import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import "./style.css";
import NavbarAccordion from "../accordions/navbaraccordion/index"
const CustomDrawer = ({ direction }) => {
  const drawerRef = useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => {
    if (drawerRef.current) {
      drawerRef.current.style[direction] = "0";
      setIsDrawerOpen(true);
    }
  }, [direction]);

  const closeDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.style[direction] = `-${100}%`;
      setIsDrawerOpen(false);
    }
  };

  useLayoutEffect(() => {
    // Open the drawer initially if needed
    if (isDrawerOpen) {
      openDrawer();
    }
  }, [isDrawerOpen, openDrawer]);

  return (
    <div className="drawer-container">
      <div
        id="mySidenav"
        ref={drawerRef}
        className={`sidenav ${direction}-Position`}
        style={{ [direction]: isDrawerOpen ? "0" : `-${200}%` }}
      >
        <a href="#text" className="drawer-closebtn" onClick={closeDrawer}>
          &times;
        </a>
        <ul className="drawer-navbar-list">
          <li>
            <a href="#text" onClick={closeDrawer}>
              Home
            </a>
          </li>
          <li>
            <a href="#text" onClick={closeDrawer}>
              About us
            </a>
          </li>
          <li>
            <a href="#text" onClick={closeDrawer}>
              Our Services
            </a>
          </li>
          <li>
            <a href="#text" onClick={closeDrawer}>
              Our Projects
            </a>
          </li>
          <li>
            <a href="#text" onClick={closeDrawer}>
              Portfolio
            </a>
          </li>
          <li><NavbarAccordion closeDrawer={closeDrawer} /> </li>
          <li>
            <a href="#text" onClick={closeDrawer}>
              Careers
            </a>
          </li>
        </ul>
      </div>
      <span
        style={{ fontSize: "30px", cursor: "pointer" }}
        onClick={isDrawerOpen ? closeDrawer : openDrawer}
      >
        &#9776;
      </span>
    </div>
  );
};

export default CustomDrawer;
