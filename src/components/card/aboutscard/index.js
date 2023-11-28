import React from "react";
import "./style.css";
import CustomButtom from "../../button";
const AboutusTextCard = (props) => {
  const { textData } = props;
  const {
    titleText,
    detailsTextOne,
    detailsTextTwo,
    detailsTextThree,
    isShowOne = false,
    isShowTwo = false,
    isShowThree = false,
    isShowbtn = false,
  } = textData;
  const { buttonLabel } = textData;
  const borderColor="#291409", color="#291409";
  return (
    <div className="about-us-text-card">
      <h3 className="about-us-text-card-title">{titleText}</h3>
      {isShowOne && <p className="about-us-text-card-details bold-500">{ detailsTextOne}</p>}
      {isShowTwo && <p className="about-us-text-card-details">{detailsTextTwo}</p>}
      {isShowThree && <p className="about-us-text-card-details">{detailsTextThree}</p>}
      {isShowbtn && <CustomButtom buttonLabel={buttonLabel} borderColor={borderColor} color={color} /> }
    </div>
  );
};

export default AboutusTextCard;
