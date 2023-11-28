import React, {useState, useEffect} from "react";
import "./style.css";
const BannerCard = (props) => {
  const { data } = props;
  const { counterEnd, label } = data;
  const [counterVlue, setCounter] = useState(0);
  useEffect(() => {
    const counts = setInterval(() => {
      if (counterVlue < counterEnd) {
        setCounter(counterVlue + 1);
      } else {
        clearInterval(counts);
      }
    }, 10);
    return () => clearInterval(counts);
  }, [counterVlue, counterEnd]);
  
  return (
    <div className="banner-card">
      <h3 className="banner-card-counter">{counterVlue}+</h3>
      <p className="banner-card-label">{label}</p>
    </div>
  );
};

export default BannerCard;
