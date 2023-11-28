import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import ImageCard from "../card/imagecard";
import AboutusTextCard from "../card/aboutscard";
import AboutusImg from "../../utils/assets/images/about-us-img.jpg";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {Button} from "@mui/material";
const Aboutus = (props) => {
  const {showBtn = true} = props;
  const imgData = {
    src: AboutusImg,
    className: "about-us-img",
    alt: "About us",
  };
  const btnStyle = {
    backgroundColor: "rgba(39, 39, 42, 0.7)",
    width: "3rem",
    minWidth: "3rem",
    height: "3rem",
    color: "#ffffff",
    borderRadius: "6px",
    position: "fixed",
    right: "2rem",
    bottom: "1rem",
    zIndex: "10",
    transition:"all 0.5s ease-in-out",
    '&:hover':{backgroundColor:"#291409", color:"#f0c394"}
  };
  const handleScrollTop = () => {
    console.log("Scrolling to top");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const textData = {
    titleText: "Pushing The Limits Across Boundries.",
    detailsTextOne:
      "The Shanfari Group, one of the most reputed establishments today, had its humble beginnings in Salalah, Oman in 1960.",
    detailsTextTwo:
      "Formed by His Excellency Sheikh Said Bin Ahmed Al Shanfari in 1960, the Shanfari Group has practically mirrored the development of modern Oman, and stands tall today, as one of the country's most dynamic business groups. Ably guided by the visionary leadership of His Majesty Sultan Qaboos, the Group has emerged as one of Oman's largest industrial and services conglomerate and a valuable contributor to the development of the nation's infrastructure.",
    detailsTextThree:
      "The Shanfari Group’s highly diversified interests span a variety of domains includes roads and infrastructure, tourism, automotives, metal industry, ready mix concrete, aluminum and Oil & Gas. Led from the front by Dr. Adil Bin Said Al Shanfari, Vice Chairman & CEO, the Company is headquartered in Muscat, Oman, with field operations, manufacturing facilities and offices across the Sultanate.",
    buttonLabel: "About us",
    isShowOne: true,
    isShowTwo: true,
    isShowThree: true,
    isShowbtn:showBtn,
  };
  const customPadding = {
    xs: "2rem 1rem",
    sm: "2rem 1rem",
    md: "3rem 3rem",
    lg: "9rem 3rem",
    lx: "9rem 3rem",
  };
  return (
    <Grid container sx={{ backgroundColor: "#F0C394" }} id="about-us-section">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container sx={{ padding: customPadding }} spacing={2}>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <ImageCard imgData={imgData} />
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12} sx={{paddingLeft:{md:"2rem"}}}>
            <AboutusTextCard textData={textData} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Button
          variant="contained"
          sx={btnStyle}
          onClick={() => handleScrollTop()}
        >
          <KeyboardArrowUpIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Aboutus;
