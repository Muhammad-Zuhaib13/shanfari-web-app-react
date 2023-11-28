import { Grid } from "@mui/material";
import React from "react";
import ImageCard from "../card/imagecard";
import ManagementTeamImg from "../../utils/assets/images/management-team-img.jpg";
import "./style.css";
const ManagementTeam = () => {
  const customPadding = {
    xs: "3rem 1rem",
    sm: "3rem 1rem",
    md: "3rem 3rem",
    lg: "5rem 3rem",
    lx: "5rem 3rem",
  };
  const imgData = {
    src: ManagementTeamImg,
    className: "management-team-img-card",
    alt: "corporate management team",
  };
  const textData = {
    title: "Corporate Management Team",
    subtitle: "H.E SAID BIN AHMED AL SHANFARI (Chairman)",
    detailsOne:
      "One of the most renowned business figures in the Middle East, H.E Said Bin Ahmed Al Shanfari, Chairman of the Shanfari Group, is also a highly regarded man within Oman’s business community. His many distinctions include being a former Minister of Petroleum Minerals Agriculture & Fisheries from 1974 until 1997, when he retired to rejoin the family business. His 24 years in public service was a period that fuelled Oman’s gas industry tremendously. In fact, during his tenure, he personally oversaw the implementation and construction of one of the world’s largest LNG projects, Oman LNG and the Al Maha Petrol station network throughtout the Sultanate of Oman.",
    detailsTow:
      "H.E. Said Bin Ahmed Al Shanfari is also the former Chairman of the Industrial Bank of Oman, a member of the Oman Chamber of Commerce and is on the Board of numerous public and private companies",
    detailsThree:
      "Bringing in new ideas and a 21st century outlook, Dr. Adil Bin Said Al Shanfarii, Vice Chairman & CEO of the Shanfari Group, was the perfect growth pill for the Shanfari Group as it focused its energies into the new millennium. Dr. Adil Saeed Ahmed Al Shanfari graduated with a Degree in Business in 1988 from the University of Denver and joined the Group in 1994, after spending a few years working in the USA. He currently overlooks all the day-to-day activities of the Group.",
    bottomTitle:
      "Sheikh Dr. Adil Said Ahmed Al Shanfari ( Vice Chairman & CEO )",
  };
  return (
    <Grid container>
      <Grid container id="management-team-section">
        <Grid
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          id="management-team-container"
        >
          <Grid container sx={{ padding: customPadding }}>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
              <div className="management-team-text-card">
                <div className="mangement-text-card-title">
                  <h2>{textData.title}</h2>
                </div>
                <div className="management-text-card-sutitle">
                  <h3>{textData.subtitle}</h3>
                </div>
                <div className="management-text-card-details">
                  <p>{textData.detailsOne}</p>
                  <p>{textData.detailsTow}</p>
                </div>
                <div className="management-text-card-bottom-title">
                    <h3>{textData.bottomTitle}</h3>
                </div>
                <div className="management-text-card-details">
                  <p>{textData.detailsThree}</p>
                </div>
              </div>
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
              <ImageCard imgData={imgData} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ManagementTeam;
