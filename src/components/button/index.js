import React from "react";
import "./style.css"
const CustomButtom = (props) => {

  
  const { buttonLabel, borderColor="#ffffff", color="#ffffff" } = props;



  return (
    <>
      <button className="custom-btn" style={{borderColor:borderColor, color:color}}>
        <span>{buttonLabel}</span>
        <span>
         
          <i className="fa-solid fa-arrow-up text-light"></i>
        </span>
      </button>
    </>
  );
};

export default CustomButtom;
