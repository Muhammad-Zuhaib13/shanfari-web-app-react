import React from "react";
import "./style.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProjectSlider from "../../sliders/projectslider";
import srcOne from "../../../utils/assets/images/project-img-01.jpg";
import srcTwo from "../../../utils/assets/images/project-img-02.jpg";
import srcThree from "../../../utils/assets/images/project-img-03.jpg";
import CustomButtom from "../../button";
const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div className="slider-btn-container">{children}</div>
        </Box>
      )}
    </div>
  );
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProjectTabs = () => {
  const sliderDataOne = [
    {
      id: 1,
      imgSrc: srcOne,
      titleText: "Sheikh Abdullah Villa Boushar",
      detailsText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      id: 2,
      imgSrc: srcTwo,
      titleText: "Al Mouj Villa 1",
      detailsText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      id: 3,
      imgSrc: srcThree,
      titleText: "Al Mouj Villa 2",
      detailsText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      id: 4,
      imgSrc: srcOne,
      titleText: "Sheikh Abdullah Villa Boushar",
      detailsText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
  ];
  const buttonLabel = "View all Projects",
    borderColor = "#291409",
    color = "#291409";
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="project-tabs-container">
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            indicatorColor="transparent"
            className="project-tabs-btn-group"
          >
            <Tab
              label="Completed"
              {...a11yProps(0)}
              className={value === 0 ? "custom-tab-selected" : "custom-tab"}
              onClick={(e) => handleChange(e, 0)}
            />
            <Tab
              label="Ongoing"
              {...a11yProps(1)}
              className={value === 1 ? "custom-tab-selected" : "custom-tab"}
              onClick={(e) => handleChange(e, 1)}
            />
            <Tab
              label="Coming Soon"
              {...a11yProps(2)}
              className={value === 2 ? "custom-tab-selected" : "custom-tab"}
              onClick={(e) => handleChange(e, 2)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ProjectSlider sliderData={sliderDataOne} />
          <div className="projects-btn">
            <CustomButtom
              buttonLabel={buttonLabel}
              borderColor={borderColor}
              color={color}
            />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ProjectSlider sliderData={sliderDataOne} />
          <div className="projects-btn">
            <CustomButtom
              buttonLabel={buttonLabel}
              borderColor={borderColor}
              color={color}
            />
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ProjectSlider sliderData={sliderDataOne} />
          <div className="projects-btn">
            <CustomButtom
              buttonLabel={buttonLabel}
              borderColor={borderColor}
              color={color}
            />
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default ProjectTabs;
