import React from "react";
import "./style.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FooterAccordion = () => {
  return (
    <div className="footer-accordion-container">
      <Accordion className="custom-footer-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="white"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="custom-footer-accordion-summary"
        >
          <div className="footer-ul-container-heading">
            <h3>Quick Link</h3>
          </div>
        </AccordionSummary>
        <AccordionDetails className="custom-footer-accordion-details">
          <ul className="footer-ul quick-link">
            <li>
              <a href="#footer-section">Home</a>
            </li>
            <li>
              <a href="#footer-section">About us</a>
            </li>
            <li>
              <a href="#footer-section">Our Services</a>
            </li>
            <li>
              <a href="#footer-section">Our Project</a>
            </li>
            <li>
              <a href="#footer-section">Portfolio</a>
            </li>
            <li>
              <a href="#footer-section">Career</a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className="custom-footer-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="white" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className="custom-footer-accordion-summary"
        >
          <div className="footer-ul-container-heading">
            <h3>Contact us</h3>
          </div>
        </AccordionSummary>
        <AccordionDetails className="custom-footer-accordion-details">
          <ul className="footer-ul contact-us">
            <li>
              <a href="#footer-section">
               <span className="contact-desktop-view">783, Muscat Postal Code <br /> 100 Sultanate of Oman</span> 
               <span className="contact-mid-view">783, Muscat Postal Code 100 Sultanate of Oman</span> 
              </a>
            </li>
            <li>
              <a href="www.shanfur.com">www.shanfari.com</a>
            </li>
            <li>
              <a href="#footer-section">group @shanfari.com</a>
            </li>
            <li>
              <a href="#footer-section">(00968) 22506000</a>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FooterAccordion;
