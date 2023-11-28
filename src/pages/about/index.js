import React from "react";
import Layout from "../../components/layout";
import { Grid } from "@mui/material";
import Aboutus from "../../components/aboutus";
import "./style.css";
import VisionAndMission from "../../components/visionandmission";
import ViceChairmanMessage from "../../components/vcmessage";
import ManagementTeam from "../../components/managementteam";
import OurValues from "../../components/values";
import Heritage from "../../components/heritage";
import "../../utils/responsivecss/responsive_styling.css"
const About = () => {
  const showBtn = false;
  return (
    <Layout>
      <Grid container id="about-page">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Aboutus showBtn={showBtn} />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <VisionAndMission />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <ViceChairmanMessage />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <ManagementTeam />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <OurValues />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Heritage />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;
