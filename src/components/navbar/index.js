import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import CompanyLogo from "../../utils/assets/images/shanfari-log-img.png";
import BannerImg from "../../utils/assets/images/top-background-img.png";
import CustomDrawer from "../customdrawer";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const customPadding = {
    xs: "1rem 1rem",
    sm: "1rem 1rem",
    md: "1rem 3rem",
    lg: "1rem 3rem",
    lx: "1rem 3rem",
  };
  const direction = "top";
  return (
    <Grid
      container
      className="header-bg"
      id="navbar"
      sx={{ backgroundImage: `url(${BannerImg})` }}
    >
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container sx={{ padding: customPadding }}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="navbar-conatiner">
              <div className="nabar-company-logo">
                <img src={CompanyLogo} alt="Shanfari" />
              </div>
              <div className="navbar-menu desktop-view">
                <ul className="navbar-menu-list">
                  <li className="hover-links-effect">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="hover-links-effect">
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li className="hover-links-effect dropdwon">
                    <NavLink to="/services">Our Services</NavLink>
                    <ul className="dropdown-menu">
                      <li className="hover-links-effect">
                        <a href="#interior-design">Interior Design</a>
                      </li>
                      <li className="hover-links-effect">
                        <a href="#custom-furniture">Custom Furniture</a>
                      </li>
                      <li className="hover-links-effect">
                        <a href="#interior-outfit">Interior Outfit</a>
                      </li>
                      <li className="hover-links-effect">
                        <a href="#exhibition-set-works">Exhibition Set Works</a>
                      </li>
                    </ul>
                  </li>
                  <li className="hover-links-effect">
                    <a href="#our-projects-section">Our Projects</a>
                  </li>
                  <li className="hover-links-effect">
                    <a href="#portfolio-section">Portfolio</a>
                  </li>
                  <li className="hover-links-effect">
                    <a href="#careers">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="navbar-icons medium-view">
                <ul className="navbar-icons-list">
                  <li>
                    <CustomDrawer direction={direction} />
                  </li>
                </ul>
              </div>
              <div className="navbar-icons desktop-view">
                <ul className="navbar-icons-list">
                  <li className="hover-links-effect">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </li>
                  <li>
                    <button className="login-btn">Login</button>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
