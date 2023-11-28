import { Grid } from "@mui/material";
import React from "react";
import "./style.css";
import Heading from "../heading";
import ClientImg from "../../utils/assets/images/client-img-logo.png";
const Clients = () => {
  const titleText = "Our Clients",
    fontColor = "#291409";
  const clientDetails = [
    { id: 1, href: "#clients-section", imgSrc: ClientImg, alt: "client one" },
    { id: 2, href: "#clients-section", imgSrc: ClientImg, alt: "client two" },
    { id: 3, href: "#clients-section", imgSrc: ClientImg, alt: "client three" },
    { id: 4, href: "#clients-section", imgSrc: ClientImg, alt: "client four" },
  ];
  const clientList = clientDetails.map((data) => {
    const { id, href, imgSrc, alt } = data;
    return (
      <li key={id}>
        <a href={href}>
          <img src={imgSrc} alt={alt} />
        </a>
      </li>
    );
  });
  return (
    <Grid container id="clients-section">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="clients-heading-container">
          <Heading titleText={titleText} fontColor={fontColor} />
        </div>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div className="clients-container">
          <ul className="clients-list">
            {clientList}
          </ul>
        </div>
      </Grid>
    </Grid>
  );
};

export default Clients;
