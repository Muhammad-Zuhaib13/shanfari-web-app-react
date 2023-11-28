import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import FooterImg from "../../utils/assets/images/footer-logo-img.png";
import FooterAccordion from "../accordions/footeraccordion";
const Footer = () => {
  //const customPadding = { xl: "4rem 3rem", lg: "4rem 3rem" };
  const desktopViewEle = {
    "@media (max-width: 1024px)": { display: "none" },
    "@media (min-width:1025px )": { display: "block" },
  };
  const midviewEle = {
    "@media (max-width: 1024px)": { display: "block" },
    "@media (min-width:1025px )": { display: "none" },
  };
  return (
    <Grid container id="footer-section">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={desktopViewEle}>
        <div className="footer-links-lists-container">
          <div className="footer-img-text-container">
            <div className="footer-company-logo">
              <a href="#footer-section">
                <img src={FooterImg} alt="footer logo" />
              </a>
            </div>
            <div className="footer-para">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's Lorem Ipsum is .
              </p>
            </div>
          </div>
          <div className="footer-ul-container">
            <div className="footer-ul-container-heading">
              <h3>Quick Link</h3>
            </div>
            <ul className="footer-ul quick-link">
              <li className="hover-links-effect">
                <a href="#footer-section">Home</a>
              </li>
              <li className="hover-links-effect">
                <a href="#footer-section">About us</a>
              </li>
              <li className="hover-links-effect">
                <a href="#footer-section">Our Services</a>
              </li>
              <li className="hover-links-effect">
                <a href="#footer-section">Our Project</a>
              </li>
              <li className="hover-links-effect">
                <a href="#footer-section">Portfolio</a>
              </li>
              <li className="hover-links-effect">
                <a href="#footer-section">Career</a>
              </li>
            </ul>
          </div>
          <div className="footer-ul-container">
            <div className="footer-ul-container-heading">
              <h3>Contact us</h3>
            </div>
            <ul className="footer-ul contact-us">
              <li className="hover-links-effect">
                <a href="#footer-section">
                  783, Muscat Postal Code <br /> 100 Sultanate of Oman
                </a>
              </li>
              <li className="hover-links-effect">
                <a href="www.shanfur.com">www.shanfari.com</a>
              </li>
              <li className="hover-links-effect">
                <a href="#footer-section">group @shanfari.com</a>
              </li>
              <li className="hover-links-effect">
                <a href="#footer-section">(00968) 22506000</a>
              </li>
            </ul>
          </div>
          <div className="footer-ul-container">
            <div className="footer-ul-container-heading">
              <h3>Social Media</h3>
            </div>
            <ul className="footer-ul social-media">
              <li className="hover-links-effect">
                <a href="www.facebook.com" target="_blank">
                  Facebook
                </a>
              </li>
              <li className="hover-links-effect">
                <a href="www.instagram.com" target="_blank">
                  Instagram
                </a>
              </li>
              <li className="hover-links-effect">
                <a href="www.linkedin.com" target="_blank">
                  Linkedin
                </a>
              </li>
              <li className="hover-links-effect">
                <a href="www.twitter.com" traget="_blank">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={midviewEle}>
        <div className="footer-links-lists-container">
          <div className="footer-img-text-container">
            <div className="footer-company-logo">
              <a href="#footer-section">
                <img src={FooterImg} alt="footer logo" />
              </a>
            </div>
            <div className="footer-para">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's Lorem Ipsum is .
              </p>
            </div>
          </div>
          <div className="footer-ul-accordion-container">
            <FooterAccordion />
          </div>
          <div className="footer-ul-container social-media">
            <div className="footer-ul-container-heading">
              <h3>Social Media</h3>
            </div>
            <ul className="footer-ul social-media">
              <li className="social-icons">
                <a href="www.facebook.com" target="_blank">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li className="social-icons">
                <a href="www.instagram.com" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="social-icons">
                <a href="www.linkedin.com" target="_blank">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a href="www.twitter.com" traget="_blank">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="copy-right-container">
          <p>
            Copyright 2023 | Codevative Software Agency | All Rights Reserved
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default Footer;
