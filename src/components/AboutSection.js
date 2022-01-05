import React from "react";

// Importing images
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="hide">
          <h2>We work to make</h2>
        </div>
        <div className="hide">
          <h2>
            your <span>dreams</span>
          </h2>
        </div>
        <div className="hide">
          <h2>come true.</h2>
        </div>
        <p>
          Contact us for any photography or video graph ideas that you have. We
          have professionals with amazing skills to help you achieve it.{" "}
        </p>
        <button>Contact Us</button>
      </div>

      <div className="image">
        <img src={home1} alt="guy with camera" />
      </div>
    </div>
  );
};

export default AboutSection;
