import React from "react";
import "./paragraph.css"

const Paragraph = ({ paragraph, textColor }) => {
  const estilo = {
    color: textColor,
  };

  return (
    <div className="paragraph">
      <p style={estilo}>{paragraph}</p>
    </div>
  );
};

export default Paragraph;
