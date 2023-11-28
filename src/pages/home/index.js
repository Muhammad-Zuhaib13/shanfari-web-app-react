import React, { useState, useEffect } from "react";
import "./style.css";
import Layout from "../../components/bannerlayout";
import { Grid } from "@mui/material";
import Aboutus from "../../components/aboutus";
import Services from "../../components/services";
import Projects from "../../components/porjects";
import Manage from "../../components/manage";
import Portfolio from "../../components/portfolio";
import Clients from "../../components/clients";
import { CirclesWithBar } from "react-loader-spinner";
import "../../utils/responsivecss/responsive_styling.css";
import CompanyImg from "../../utils/assets/images/shanfari-text-logo-img.png";
const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const showBtn = true;
  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="company-logo">
            <img src={CompanyImg} alt="" />
          </div>
          <CirclesWithBar
            type="CirclesWithBar"
            color="#F0C394"
            height={180}
            width={180}
            className="custom-loader"
          />
        </div>
      ) : (
        <Layout>
          <Grid container id="home-page">
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Aboutus showBtn={showBtn} />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Services />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Projects />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Manage />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Portfolio />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Clients />
            </Grid>
          </Grid>
        </Layout>
      )}
    </>
  );
};

export default Home;
