import React from "react";
import "./stats.css";
import { ReactComponent as Usericon } from "../assets/Group1216.svg";
import { ReactComponent as Mappinicon } from "../assets/Group1215.svg";
import { ReactComponent as Servericon } from "../assets/Group1217.svg";

const Stats = () => {
  return (
    <div className="stats_container">
      <div className="stats_item">
        <Usericon className="usr_icon_img" />
        <div className="stats_text">
          <h2>90+</h2>
          <p>Users</p>
        </div>
      </div>
      <div className="stats_item">
        <Mappinicon className="map_icon_img" />
        <div className="stats_text">
          <h2>30+</h2>
          <p>Locations</p>
        </div>
      </div>
      <div className="stats_item">
        <Servericon className="server_icon_img" />
        <div className="stats_text">
          <h2>50+</h2>
          <p>Servers</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
