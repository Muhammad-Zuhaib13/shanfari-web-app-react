import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ServicesImgOne from "../../../utils/assets/images/services-img-01.jpg";
import ServicesImgTwo from "../../../utils/assets/images/services-img-02.png";
import ServicesImgThree from "../../../utils/assets/images/services-img-03.png";
import ServicesImgFour from "../../../utils/assets/images/services-img-04.png";
import ImageCard from "../../card/imagecard";
import CustomButtom from "../../button";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));
const ServicesAccordion = () => {
  const [expanded, setExpanded] = React.useState("panel1");
  const imgDataOne = {
    src: ServicesImgOne,
    className: "services-img-card",
    alt: "Interior Design",
  };
  const imgDataTwo = {
    src: ServicesImgTwo,
    className: "services-img-card",
    alt: "Interior Fit outs",
  };
  const imgDataThree = {
    src: ServicesImgThree,
    className: "services-img-card",
    alt: "Customized Furniture",
  };
  const imgDataFour = {
    src: ServicesImgFour,
    className: "services-img-card",
    alt: "Exhibition Set Works",
  };
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const borderColor="#291409", color="#291409";
  const buttonLabel = "Our Services";
  return (
    <Grid container>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <div className="services-text-accordion-container">
          <div className="services-text-accordion-wrapper">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              className="services-accordion"
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                className="services-accordion-title"
              >
                <h3>Interior Desing</h3>
              </AccordionSummary>
              <AccordionDetails className="services-accordion-details">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry's
                  standard .
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className="services-accordion"
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
                className="services-accordion-title"
              >
                <h3>Interior Fit outs</h3>
              </AccordionSummary>
              <AccordionDetails className="services-accordion-details">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry's
                  standard .
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              className="services-accordion"
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
                className="services-accordion-title"
              >
                <h3>Customized Furniture</h3>
              </AccordionSummary>
              <AccordionDetails className="services-accordion-details">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry's
                  standard .
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              className="services-accordion"
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
                className="services-accordion-title"
              >
                <h3>Exhibition Set Works</h3>
              </AccordionSummary>
              <AccordionDetails className="services-accordion-details">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industry's
                  standard .
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="services-btn">
            <CustomButtom buttonLabel={buttonLabel} borderColor={borderColor} color={color} />
          </div>
        </div>
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className="services-img-accordion"
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            className="remove-tab-accordion"
            id="panel1d-header"
          ></AccordionSummary>
          <AccordionDetails className="services-img-container">
            <ImageCard imgData={imgDataOne} />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          className="services-img-accordion"
        >
          <AccordionSummary
            aria-controls="panel2d-content"
            className="remove-tab-accordion"
            id="panel2d-header"
          ></AccordionSummary>
          <AccordionDetails className="services-img-container">
            <ImageCard imgData={imgDataTwo} />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          className="services-img-accordion"
        >
          <AccordionSummary
            aria-controls="panel3d-content"
            className="remove-tab-accordion"
            id="panel3d-header"
          ></AccordionSummary>
          <AccordionDetails className="services-img-container">
            <ImageCard imgData={imgDataThree} />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          className="services-img-accordion"
        >
          <AccordionSummary
            aria-controls="panel4d-content"
            className="remove-tab-accordion"
            id="panel4d-header"
          ></AccordionSummary>
          <AccordionDetails className="services-img-container">
            <ImageCard imgData={imgDataFour} />
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default ServicesAccordion;
