import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import ImageCard from "../card/imagecard";
import VCImage from "../../utils/assets/images/chairman-img.jpg";
const ViceChairmanMessage = () => {
  const customPadding = {
    xs: "3rem 1rem",
    sm: "3rem 1rem",
    md: "3rem 3rem",
    lg: "5rem 3rem",
    lx: "5rem 3rem",
  };
  const imgData = {
    src: VCImage,
    className: "vc-message-img-card",
    alt: "vice chairman",
  };
  const textData = {
    title: "Chairman’s Message",
    subTitle: "H.E SAID BIN AHMED AL SHANFARI",
    detail: [
      {
        id: 1,
        para: "From starting off in the 1960’s, to entering a new millennium and now confidently taking on the challenges of the 21st century, the Shanfari Group is a vision come alive for His Excellency Said bin Ahmed Al Shanfari.",
      },
      {
        id: 2,
        para: "We are proud today of the blessings and wise leadership of His Majesty Sultan Qaboos Bin Said, a dynamic leader, with whose guidance, the Shanfari Group of Companies has played – and continues to play a vital role in Oman’s commitment to modernization and development.",
      },
      {
        id: 3,
        para: "Today, the Shanfari Group is among the largest conglomerates in the Sultanate of Oman and one of the nation’s most active infrastructure development companies. With interests covering construction, manufacturing, tourism and transport, the Shanfari Group has diversified into all facets of Oman’s modern economy. Constantly growing, the Group currently has over 25 separate companies and divisions and employs over 2,500 people.",
      },
      {
        id: 4,
        para: "Our future along with that of the Sultanate of Oman is our driving force and we are focused on a path that allows us to achieve both.",
      },
    ],
    bottomTitle: [
      { id: 1, bottomHeading: "H.E Said bin Ahmed Al Shanfari" },
      { id: 2, bottomHeading: "Chairman" },
    ],
  };
  return (
    <Grid container id="vc-message-section">
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        id="vc-msg-first-card-container"
      >
        <Grid container sx={{ padding: customPadding }}>
          <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className="vc-message-text-card">
              <div className="vc-title">
                <h2>{textData.title}</h2>
              </div>
              <div className="vc-subtitle">
                <h4>{textData.subTitle}</h4>
              </div>
              <div className="vc-detailed-message">
                {textData.detail.map((data) => {
                  const { id, para } = data;
                  return <p key={id}>{para}</p>;
                })}
              </div>
              <div className="vc-bottom-title">
                {textData.bottomTitle.map((title) => {
                  const { bottomHeading, id } = title;
                  return <h4 key={id}>{bottomHeading}</h4>;
                })}
              </div>
            </div>
          </Grid>
          <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
            <ImageCard imgData={imgData} />
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
        id="vc-msg-second-card-container"
      >
        <Grid container sx={{ padding: customPadding }}>
          <Grid
            item
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            sx={{ order: { xl: 1, lg: 1, md: 2, sm: 2, xs: 2 } }}
          >
            <ImageCard imgData={imgData} />
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            sx={{ order: { xl: 2, lg: 2, md: 1, sm: 1, xs: 1 } }}
          >
            <div className="vc-message-text-card">
              <div className="vc-title">
                <h2>{textData.title}</h2>
              </div>
              <div className="vc-subtitle">
                <h4>{textData.subTitle}</h4>
              </div>
              <div className="vc-detailed-message">
                {textData.detail.map((data) => {
                  const { id, para } = data;
                  return <p key={id}>{para}</p>;
                })}
              </div>
              <div className="vc-bottom-title">
                {textData.bottomTitle.map((title) => {
                  const { bottomHeading, id } = title;
                  return <h4 key={id}>{bottomHeading}</h4>;
                })}
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ViceChairmanMessage;
