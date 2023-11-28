import { Grid } from "@mui/material";
import React from "react";
import "./style.css";
import Heading from "../heading";
import TextCard from "../card/textCard/index";
import ImageCard from "../card/imagecard";
import bgOneImg from "../../utils/assets/images/manage-section-bg-1.png";
import bgTwoImg from "../../utils/assets/images/manage-section-bg-2.png";
import ManageImgOne from "../../utils/assets/images/manage-section-1-img.jpg";
import ManageImgTwo from "../../utils/assets/images/manage-section-2-img.jpg";
import ManageImgThree from "../../utils/assets/images/manage-section-3-img.jpg";
const Manage = () => {
  const titleText = "How We Manage";
  const fontColor = "#291409";
  const imgOneData = {
    src: ManageImgOne,
    className: "manage-img-card",
    alt: "manage section one",
  };
  const imgTwoData = {
    src: ManageImgTwo,
    className: "manage-img-card",
    alt: "manage section two",
  };
  const imgThreeData = {
    src: ManageImgThree,
    className: "manage-img-card",
    alt: "manage section three",
  };
  const cardOneData = {
    titleText: "Lorem  Ispum  Dolar",
    textAlign: "left",
    fontColor: "#ffffff",
    detailsText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply",
    buttonLabel: "Learn More",
    color: "#ffffff",
    borderColor: "#ffffff",
    bgImage: bgOneImg,
    paraColor: "#ffffff",
    bgColor: "#291409",
  };
  const cardTwoData = {
    titleText: "Lorem  Ispum  Dolar",
    textAlign: "left",
    fontColor: "#291409",
    detailsText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply",
    buttonLabel: "Learn More",
    color: "#291409",
    borderColor: "#291409",
    bgImage: bgTwoImg,
    paraColor: "#291409",
    bgColor: "#fce6d0",
  };
  const cardThreeData = {
    titleText: "Lorem  Ispum  Dolar",
    textAlign: "left",
    fontColor: "#ffffff",
    detailsText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply",
    buttonLabel: "Learn More",
    color: "#ffffff",
    borderColor: "#ffffff",
    paraColor: "#ffffff",
    bgImage: bgOneImg,
    bgColor: "#291409",
  };
  // const imgDivView = { xl: 1, lg: 1, md: 2, sm: 2, xs: 2 };
  // const textDivView = { xl: 2, lg: 2, md: 1, sm: 1, xs: 1 };
  return (
    <Grid container id="manage-section">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="manage-title-text-container">
          <Heading titleText={titleText} fontColor={fontColor} />
          <p className="manage-title-text-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <ImageCard imgData={imgOneData} />
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <TextCard cardData={cardOneData} />
      </Grid>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={12}
        xs={12}
        
      >
        <TextCard cardData={cardTwoData} />
      </Grid>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={12}
        xs={12}
    
      >
        <ImageCard imgData={imgTwoData} />
      </Grid>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={12}
        xs={12}
        sx={{ order: { xl: 1, lg: 1, md: 2, sm: 2, xs: 2 } }}
      >
        <ImageCard imgData={imgThreeData} />
      </Grid>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={12}
        xs={12}
        sx={{ order: { xl: 2, lg: 2, md: 1, sm: 1, xs: 1 } }}
      >
        <TextCard cardData={cardThreeData} />
      </Grid>
    </Grid>
  );
};

export default Manage;
