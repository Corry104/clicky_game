import React from "react";
import "./imgCard.css";

const ImgCard = props => {
  return (
    <div className="card" onClick={() => props.clickImg(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default ImgCard;