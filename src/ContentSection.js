import React from "react";
import Text from "./Text.js";

import "./ContentSection.css";

const ContentSection = ({ section }) => (
  <div className="ContentSection">
    {section.image && (
      <div className="ImageWrapper">
        <img src={section.image} alt={section.imageAlt} />
      </div>
    )}
    {section.text && (
      <div className="TextWrapper">
        <Text>{section.text}</Text>
      </div>
    )}
  </div>
);

export default ContentSection;
