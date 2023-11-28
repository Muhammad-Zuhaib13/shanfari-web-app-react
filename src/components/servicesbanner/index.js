import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import BannerImg from "../../utils/assets/images/services-banner-img.jpg" 
const ServicesBanner = () => {
  return (
    <Grid container id="services-banner-section">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="services-banner-container">
          <div className="services-banner-img">
            <img src={BannerImg} alt="" />
          </div>
          <div className="services-banner-text">
            <h2>Our Services</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ServicesBanner;
