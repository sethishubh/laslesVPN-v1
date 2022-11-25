import React from "react";
import { ReactComponent as FeatureillustrationImage } from "../assets/Illustration2.svg";
import "./features.css";

const Features = () => {
  return (
    <div className="features_container">
      <div className="features_col_left">
        <FeatureillustrationImage className="ftrs_ill_img" />
      </div>
      <div className="features_col_right">
        <h2>We Provide Many Features You Can Use</h2>
        <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
        <ul>
          <li>Powerfull online protection</li>
          <li>Internet without borders.</li>
          <li>Supercharged vpn</li>
          <li>No specific time limits</li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
