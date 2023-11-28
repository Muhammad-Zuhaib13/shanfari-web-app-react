import React from "react";
import "./style.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const NavbarAccordion = (props) => {
  const { closeDrawer } = props;
  return (
    <div className="navbar-accordion-container">
      <Accordion className="custom-navbar-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{marginRight:"25px", color:"#ffffff"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="navbar-accordion-summary"
        >
          <div className="navbar-ul-container-heading">
            <a href="#our-services">
              <h3>Our Services</h3>
            </a>
          </div>
        </AccordionSummary>
        <AccordionDetails className="custom-navbar-accordion-details">
          <ul className="navbar-accordion-ul-list">
            <li>
              <a
                href="#footer-section"
                onClick={() => {
                  closeDrawer();
                }}
              >
                Interior Design
              </a>
            </li>
            <li>
              <a
                href="#footer-section"
                onClick={() => {
                  closeDrawer();
                }}
              >
                Custom Furniture
              </a>
            </li>
            <li>
              <a
                href="#footer-section"
                onClick={() => {
                  closeDrawer();
                }}
              >
                Interior Outfit
              </a>
            </li>
            <li>
              <a
                href="#footer-section"
                onClick={() => {
                  closeDrawer();
                }}
              >
                Exhibition Set Works
              </a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default NavbarAccordion;
