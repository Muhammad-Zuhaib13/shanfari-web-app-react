import { Grid } from "@mui/material";
import React from "react";
import Layout from "../../components/layout";
import "./style.css";
import ServicesBanner from "../../components/servicesbanner";
import ServicesImgsContainer from "../../components/servicesiimgscontainer";
import "../../utils/responsivecss/responsive_styling.css"
const Services = () => {
  return (
    <Layout>
      <Grid container id="services-page">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <ServicesBanner />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <ServicesImgsContainer />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Services;
