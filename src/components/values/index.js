import { Grid } from "@mui/material";
import React from "react";
import "./style.css";
import Heading from "../heading";
import ValueImgOne from "../../utils/assets/images/value-img-1.png";
import ValueImgTwo from "../../utils/assets/images/value-img-2.png";
import ValueImgThree from "../../utils/assets/images/value-img-3.png";
import ValueImgFour from "../../utils/assets/images/value-img-4.png";
import ValueImgFive from "../../utils/assets/images/value-img-5.png";
import ValueImgSix from "../../utils/assets/images/value-img-6.png";
import ValueImgSeven from "../../utils/assets/images/value-img-7.png";
import ValueImgEight from "../../utils/assets/images/value-img-8.png";
const OurValues = () => {
  const customPadding = {
    xs: "3rem 1rem",
    sm: "3rem 1rem",
    md: "3rem 3rem",
    lg: "5rem 3rem",
    lx: "5rem 3rem",
  };
  const titleText = "Our Values";
  const textImgCard = [
    {
      id: 1,
      className: "value-card",
      src: ValueImgOne,
      alt: "Service",
      valueLabel: "Service",
    },
    {
      id: 2,
      className: "value-card",
      src: ValueImgTwo,
      alt: "First Time Right, Every Time",
      valueLabel: "First Time Right, Every Time",
    },
    {
      id: 3,
      className: "value-card",
      src: ValueImgThree,
      alt: "Honesty",
      valueLabel: "Honesty",
    },
    {
      id: 4,
      className: "value-card",
      src: ValueImgFour,
      alt: "Accountability",
      valueLabel: "Accountability",
    },
    {
      id: 5,
      className: "value-card",
      src: ValueImgFive,
      alt: "Networking",
      valueLabel: "Networking",
    },
    {
      id: 6,
      className: "value-card",
      src: ValueImgSix,
      alt: "Act together",
      valueLabel: "Act together",
    },
    {
      id: 7,
      className: "value-card",
      src: ValueImgSeven,
      alt: "Respect",
      valueLabel: "Service",
    },
    {
      id: 8,
      className: "value-card",
      src: ValueImgEight,
      alt: "Innovation",
      valueLabel: "Service",
    },
  ];
  const firstRow = textImgCard.slice(0, 4);
  const secondRow = textImgCard.slice(4, 8);
  return (
    <Grid container id="our-values-section">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container sx={{ padding: customPadding }}>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="our-values-title">
              <Heading titleText={titleText} />
            </div>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="values-card-container">
              <div className="values-first-row-cards-container">
                {firstRow.map((data) => {
                  const { id, className, src, alt, valueLabel } = data;
                  return (
                    <div key={id} className={className}>
                      <div className="value-card-img">
                        <img src={src} alt={alt} />
                      </div>
                      <div className="value-card-text">
                        <h3>{valueLabel}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="values-second-row-cards-container">
                {secondRow.map((data) => {
                  const { id, className, src, alt, valueLabel } = data;
                  return (
                    <div key={id} className={className}>
                      <div className="value-card-img">
                        <img src={src} alt={alt} />
                      </div>
                      <div className="value-card-text">
                        <h3>{valueLabel}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OurValues;
