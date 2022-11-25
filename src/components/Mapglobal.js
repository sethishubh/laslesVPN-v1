import React from "react";
import "./plans.css";
import { ReactComponent as MapIcon } from "../assets/HugeGlobal.svg";
import { ReactComponent as Netflix } from "../assets/MaskGroup.svg";
import { ReactComponent as Reddit } from "../assets/MaskGroup1.svg";
import { ReactComponent as Amazon } from "../assets/MaskGroup2.svg";
import { ReactComponent as Discord } from "../assets/MaskGroup3.svg";
import { ReactComponent as Spotify } from "../assets/MaskGroup4.svg";

const Mapglobal = () => {
  return (
    <div className="plans_container">
      <h2>
        Huge Global Network <br /> of Fast VPN{" "}
      </h2>
      <p>
        See <b>LaslesVPN</b> everywhere to make it easier for you when you move <br /> locations.
      </p>

      <div className="mapglobals">
        <MapIcon className="mapglbl" />
        <div className="companies_greyed">
          <Netflix className="brand_img" />
          <Reddit className="brand_img" />
          <Amazon className="brand_img" />
          <Discord className="brand_img" />
          <Spotify className="brand_img" />
        </div>
      </div>
    </div>
  );
};

export default Mapglobal;
