import React from "react";
import Resume from "../../assets/DanielWatson_Resume_24.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contacts" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
