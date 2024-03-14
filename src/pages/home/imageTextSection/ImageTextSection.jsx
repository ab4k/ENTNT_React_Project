import React from "react";
import "./imageTextSection.css";
export default function ImageTextSection({
  headingText,
  subheadingText,
  altText,
  imageUrl,
  isVideo,
  videoUrl,
}) {
  return (
    <>
      <div className="text_image_container">
        <div className="text_container">
          <h2 className="heading_text">{headingText}</h2>
          <p className="subheading_text">{subheadingText}</p>
        </div>
        <div className="image_container">
          {isVideo ? (
            <video src={videoUrl} alt={altText} controls autoPlay muted />
          ) : (
            <img src={imageUrl} alt={altText} />
          )}
        </div>
      </div>
    </>
  );
}
