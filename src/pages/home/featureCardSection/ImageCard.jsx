import React from "react";
import "./imageCard.css";
export default function ImageCard({
  cardImage,
  altText,
  titleText,
  subTitleText,
}) {
  return (
    <>
      <div className="card_container">
        <div className="card_image">
          <img src={cardImage} alt={altText} />
        </div>
        <div className="card_text">
          <h3>{titleText}</h3>
          <p>{subTitleText}</p>
        </div>
      </div>
    </>
  );
}
