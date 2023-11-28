import { Grid } from "@mui/material";
import React from "react";
import Heading from "../heading";
import "./style.css";
import ServicesAccordion from "../accordions/servicesaccordion";
const Services = () => {
  const titleText = "Our Services";
  const fontColor = "#291409";
  const customPadding = {
    xs: "2rem 1rem",
    sm: "2rem 1rem",
    md: "3rem 3rem",
    lg: "5rem 3rem 2rem 3rem",
    lx: "5rem 3rem 2rem 3rem",
  };
  const paraText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";
  return (
    <Grid container id="our-services-section">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container sx={{ padding: customPadding }}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Heading titleText={titleText} fontColor={fontColor} />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="services-para">
              <p>{paraText}</p>
            </div>
          </Grid>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{ margin: "3rem 0" }}
          >
            <ServicesAccordion />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
