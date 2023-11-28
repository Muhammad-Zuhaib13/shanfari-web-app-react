import React from "react";
import "./style.css";
const Paragraph = (props) => {
  const { paraData } = props;
  const {
    fontFamily = "Lexend Deca",
    fontSize = "16px",
    fontWeight = "400",
    lineHeight = "28px",
    letterSpacing = "0 em",
    textAlign = "justified",
    detailsText,
  } = paraData;
  return (
    <div
      className="paragraph-container"
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing,
        textAlign: textAlign,
      }}
    >
      {detailsText}
    </div>
  );
};

export default Paragraph;
