import { Grid } from "@mui/material";
import React from "react";
import "./style.css";
import Heading from "../heading";
import TextCard from "../card/textCard/index";
import ImageCard from "../card/imagecard";
import bgOneImg from "../../utils/assets/images/manage-section-bg-1.png";
import bgTwoImg from "../../utils/assets/images/manage-section-bg-2.png";
import VisionMissionImgOne from "../../utils/assets/images/vision-img-01.jpg";
import VisionMissionImgTwo from "../../utils/assets/images/vision-img-02.jpg";


const VisionAndMission = () => {
  const titleText = "Vision & Mission";
  const fontColor = "#291409";
  const imgOneData = {
    src: VisionMissionImgOne,
    className: "vision-mission-img-card",
    alt: "vision and mission",
  };
  const imgTwoData = {
    src: VisionMissionImgTwo,
    className: "vision-mission-img-card",
    alt: "vision and mission",
  };
  const cardOneData = {
    titleText: "OUR MISSION",
    textAlign: "left",
    fontColor: "#ffffff",
    detailsText:
      "Successful development of its people by encouraging empowerment and inculcating responsibility. Building the Company’s expertise in different fields. Development of sound business partnerships.",
    buttonLabel: "Learn More",
    color: "#ffffff",
    borderColor: "#ffffff",
    bgImage: bgOneImg,
    paraColor: "#ffffff",
    bgColor: "#291409",
    isShowBtn:false,
    className: "vision-mission-text-card",
  };
  const cardTwoData = {
    titleText: "OUR VISION",
    textAlign: "left",
    fontColor: "#291409",
    detailsText:
      "To be an inspirational symbol of business success in Oman and Middle East as a Corporate with an International Net work and a strong focus on maintaining the highest professional standards..",
    buttonLabel: "Learn More",
    color: "#291409",
    borderColor: "#291409",
    bgImage: bgTwoImg,
    paraColor: "#291409",
    bgColor: "#fce6d0",
    isShowBtn:false,
    className: "vision-mission-text-card",
  };

  return (
    <Grid container id="vision-mission-section">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="manage-title-text-container">
          <Heading titleText={titleText} fontColor={fontColor} />
        </div>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <ImageCard imgData={imgOneData} />
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <TextCard cardData={cardOneData} />
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{order:{xl:1,lg:1,md:1, sm:2, xs:2}}}>
        <TextCard cardData={cardTwoData} />
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{order:{xl:2,lg:2,md:2, sm:1, xs:1}}}>
        <ImageCard imgData={imgTwoData} />
      </Grid>
    </Grid>
  );
};

export default VisionAndMission;
