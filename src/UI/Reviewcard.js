import React from "react";
import "./reviewcard.css";

const Reviewcard = (props) => {
  return (
    <div className="reviewcard">
      <div className="review_content_header">
        <img src={props.src} alt="Reviewer" />
        <div className="review_owner">
          <h3>{props.name}</h3>
          <p>{props.location}</p>
        </div>
        <p className="review_rating">
          4.5 <i className="fa-solid fa-star"></i>
        </p>
      </div>

      <p className="review_owner_txt">"{props.reviewtext}"</p>
    </div>
  );
};

export default Reviewcard;
