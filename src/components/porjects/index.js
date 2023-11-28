import { Grid } from "@mui/material";
import React from "react";
import "./style.css";
import Heading from "../heading";
import ProjectTabs from "../tabs/projecttabs";
const Projects = () => {
  const customPadding = {
    xs: "2rem 1rem",
    sm: "2rem 1rem",
    md: "3rem 3rem",
    lg: "5rem 3rem 2rem 3rem",
    lx: "5rem 3rem 2rem 3rem",
  };
  const titleText = "Our Projects";
  const paraText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";
  const fontColor = "#291409";
  return (
    <Grid container id="our-projects-section">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container sx={{ padding: customPadding }}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Heading titleText={titleText} fontColor={fontColor} />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="projects-para">
              <p>{paraText}</p>
            </div>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <ProjectTabs />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projects;
