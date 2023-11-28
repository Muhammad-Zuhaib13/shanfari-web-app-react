import { Grid } from "@mui/material";
import React from "react";
import "./style.css";
import ServicesImgOne from "../../utils/assets/images/service-img-01.jpg";
import ServicesImgTwo from "../../utils/assets/images/service-img-02.jpg";
import ServicesImgThree from "../../utils/assets/images/service-img-03.png";
import ServicesImgFour from "../../utils/assets/images/service-img-04.png";

const ServicesImgsContainer = () => {
  const imgData = [
    { id: 1, src: ServicesImgOne, alt: "Interior Design" },
    { id: 2, src: ServicesImgTwo, alt: "Interior Fits Out" },
    { id: 3, src: ServicesImgThree, alt: "Customized Furniture" },
    { id: 4, src: ServicesImgFour, alt: "Exhibition Set Works" },
  ];
  const customPaddingOne = {
    xs: "2rem 1rem",
    sm: "2rem 1rem",
    md: "2rem 3rem",
    lg: "4rem 3rem",
    xl: "5rem 3rem",
  };
  const customPaddingTwo = {
    xs: "3rem 1rem",
    sm: "3rem 1rem",
    md: "4rem 3rem",
    lg: "4rem 3rem",
    xl: "5rem 3rem",
  };
  return (
    <Grid container id="services-img-container-section">
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="services-text-bg"
      >
        <Grid container sx={{ padding: customPaddingOne }}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="services-img-text-container">
              <h2>Lorem Ispum</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid
          container
          sx={{
            padding: customPaddingTwo,
            backgroundColor: "#f8e3cf",
          }}
          spacing={1}
        >
          {imgData.map((item) => {
            const { id, src, alt } = item;
            return (
              <Grid key={id} item xl={6} lg={6} md={6} sm={12} xs={12}>
                <div className="services-img-container">
                  <img src={src} alt={alt} />
                  <p>{alt}</p>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServicesImgsContainer;
