import React from "react";
import "./style.css";
import Heading from "../../heading";
import CustomButtom from "../../button";
const TextCard = (porps) => {
  const { cardData } = porps;
  const {
    titleText,
    textAlign,
    fontColor,
    detailsText,
    buttonLabel="Explor",
    color,
    borderColor,
    bgImage,
    bgColor,
    paraColor = "#ffffff",
    isShowBtn = true,
    className= "",
  } = cardData;
  return (
    <div
      className={`text-card ${className}`}
      style={{ backgroundImage: `url(${bgImage})`, backgroundColor: bgColor }}
    >
      <div className="text-card-heading">
        <Heading
          titleText={titleText}
          fontColor={fontColor}
          textAlign={textAlign}
        />
      </div>
      <div className="text-card-para">
        <p style={{ color: paraColor }}>{detailsText}</p>
      </div>
      <div className="text-card-btn">
        {isShowBtn && (
          <CustomButtom
            buttonLabel={buttonLabel}
            color={color}
            borderColor={borderColor}
          />
        )}
      </div>
    </div>
  );
};

export default TextCard;
