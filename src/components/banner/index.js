import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import BannerCard from "../card/bannercard";
import BannerSlider from "../sliders/bannerslider";
import CustomButtom from "../button";

const Banner = () => {
  const cardData = [
    { id: 1, counterEnd: 250, label: "Project Finished" },
    { id: 2, counterEnd: 45, label: "Best Designer" },
    { id: 3, counterEnd: 145, label: "Running Project" },
  ];
  const customPadding = {
    xs: "1rem 1rem",
    sm: "1rem 1rem",
    md: "1rem 3rem",
    lg: "1rem 3rem",
    lx: "1rem 3rem",
  };
  const buttonLabel = "Explore Now";
  return (
    <Grid container>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container sx={{ padding: customPadding }}>
          <Grid item xl={8} lg={7} md={7} sm={12} xs={12}>
            <div className="banner-left-container">
              <div className="banner-left-heading">
                <h2>Modern Interior Design Zone</h2>
              </div>
              <div className="banner-left-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="banner-left-btns-group">
                <CustomButtom buttonLabel={buttonLabel} />
                <button className="story-btn">
                  <span>
                    <i className="fa-solid fa-caret-right"></i>
                  </span>
                  <span>Our Story</span>
                </button>
              </div>
            </div>
          </Grid>
          <Grid item xl={4} lg={5} md={5} sm={12} xs={12}>
            <div className="banner-right-container">
              {cardData.map((data) => {
                const { id } = data;
                return <BannerCard data={data} key={id} />;
              })}
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        sx={{ padding: {xl:"3rem 0", lg:"3rem 0", md:"2rem 0", sm:"2rem 0", xs:"0" } }}
      >
        <BannerSlider />
      </Grid>
    </Grid>
  );
};

export default Banner;
