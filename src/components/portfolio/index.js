import { Grid } from "@mui/material";
import React from "react";
import "./style.css";
import Heading from "../heading";
import CustomButtom from "../button";
import ImageCard from "../card/imagecard";
import PortfolioImgOne from "../../utils/assets/images/portfolio-img-1.jpg";
import PortfolioImgTwo from "../../utils/assets/images/portfolio-img-2.jpg";
import PortfolioImgThree from "../../utils/assets/images/portfolio-img-3.jpg";
import PortfolioImgFour from "../../utils/assets/images/portfolio-img-4.jpg";
import PortfolioImgFive from "../../utils/assets/images/portfolio-img-5.jpg";
const Portfolio = () => {
  const titleText = "Our Portfolio";
  const fontColor = "#291409";
  const buttonLabel = "View All",
    borderColor = "#3F3F3F",
    color = "#3F3F3F";
  const imgOneData = {
    src: PortfolioImgOne,
    className: "portfolio-img-card-one",
    alt: "portfolio one",
  };
  const imgData = [
    {
      id: 1,
      src: PortfolioImgTwo,
      className: "portfolio-img-card",
      alt: "portfolio two",
    },
    {
      id: 2,
      src: PortfolioImgThree,
      className: "portfolio-img-card",
      alt: "portfolio three",
    },
    {
      id: 3,
      src: PortfolioImgFour,
      className: "portfolio-img-card",
      alt: "portfolio four",
    },
    {
      id: 4,
      src: PortfolioImgFive,
      className: "portfolio-img-card",
      alt: "portfolio five",
    },
  ];

  const customPadding = {
    xs: "2rem 1rem",
    sm: "2rem 1rem",
    md: "3rem 3rem",
    lg: "3rem 3rem 2rem 3rem",
    lx: "3rem 3rem 2rem 3rem",
  };
  return (
    <Grid container id="portfolio-section">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="portfolio-title-text-container">
          <Heading titleText={titleText} fontColor={fontColor} />
          <p className="portfolio-title-text-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container sx={{ padding: customPadding }} spacing={2}>
          <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
            <div className="portfolio-left-img-container">
              <a href="#portfolio" className="portfolio-link">
                <ImageCard imgData={imgOneData} />
                <p>Lorem Ispum</p>
              </a>
            </div>
          </Grid>
          <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
            <div className="portfolio-right-img-container">
              <div className="portfolio-right-container-row">
                <a href="#portfolio" className="portfolio-link">
                  <ImageCard imgData={imgData[0]} />
                  <p>Lorem Ispum</p>
                </a>
                <a href="#portfolio" className="portfolio-link">
                  <ImageCard imgData={imgData[1]} />
                  <p>Lorem Ispum</p>
                </a>
              </div>
              <div className="portfolio-right-container-row">
                <a href="#portfolio" className="portfolio-link">
                  <ImageCard imgData={imgData[2]} />
                  <p>Lorem Ispum</p>
                </a>
                <a href="#portfolio" className="portfolio-link">
                  <ImageCard imgData={imgData[3]} />
                  <p>Lorem Ispum</p>
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="portfolio-btn">
              <CustomButtom
                buttonLabel={buttonLabel}
                color={color}
                borderColor={borderColor}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
