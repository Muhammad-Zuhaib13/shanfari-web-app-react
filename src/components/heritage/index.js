import { Grid } from "@mui/material";
import React from "react";
import "./style.css";
import ImageCard from "../card/imagecard";
import HeritageImg from "../../utils/assets/images/heritage-img.jpg";
const Heritage = () => {
  const customPadding = {
    xs: "3rem 1rem",
    sm: "3rem 1rem",
    md: "3rem 3rem",
    lg: "5rem 3rem",
    lx: "5rem 3rem",
  };
  const imgData = {
    src: HeritageImg,
    className: "heritage-img-card",
    alt: "Heritage",
  };
  return (
    <Grid container id="heritage-section">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container sx={{ padding: customPadding }}>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <div className="heritage-text-card">
              <div className="heritage-card-title">
                <h2>Heritage</h2>
              </div>
              <div className="heritage-card-para">
                <p>
                  The Shanfari Group, one of the most reputed establishments
                  today, had its humble beginnings in Salalah, Oman in 1960. It
                  all began when His Excellency Sheikh Said Bin Ahmed Al
                  Shanfari, a man of great vision, chose to start a small
                  trading company and become one of the first traders in Oman.
                  Taking advantage of the developmental climate in Oman then, he
                  soon diversified into construction and infrastructure
                  development. A critical decision that saw the Company grow
                  with Oman!
                </p>
                <p>
                  Building on this rich heritage at The Shanfari Group is a new
                  generation with new ideas led by the vibrant Dr. Adil Bin Said
                  Al Shanfari. However, it is a team, whose ideals and focus to
                  contribute to the development of Oman, unwaveringly, remains
                  the same.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <ImageCard imgData={imgData} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Heritage;
