import React from "react";
import "./style.css"
const ProjectCard = (props) => {
    const {imgSrc, titleText, detailsText} = props;
  return (
    <div className="project-card">
      <div className="project-card-img">
        <img src={imgSrc} alt="" />
      </div>
      <div className="project-card-title">
        <h4>{titleText}</h4>
      </div>
      <div className="project-card-details">
        <p>
         {detailsText}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
