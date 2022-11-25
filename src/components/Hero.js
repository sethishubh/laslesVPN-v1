import React from "react";
import { ReactComponent as Heroimg } from "../assets/Heroimage.svg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero_header">
      <div className="hero_left_col">
        <h1>
          Want anything to be easy with <span>LaslestVPN.</span>
        </h1>
        <p>
          Provide a network for all your needs with ease and fun using <strong>LaslesVPN</strong> <br /> discover
          interesting facts with us.
        </p>

        <button>Get Started</button>
      </div>
      <div className="hero_right_col">
        {" "}
        <Heroimg className="heroimg" />
      </div>
    </div>
  );
};

export default Hero;
