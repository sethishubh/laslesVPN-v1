import React from "react";
import Reviewcard from "../UI/Reviewcard";
import "./carousel.css";

const Carousel = () => {
  const goBackHandler = () => {
    let reviewCard = document.querySelector(".carousel_upper");
    let width = reviewCard.clientWidth;
    reviewCard.scrollLeft = reviewCard.scrollLeft - width / 2.5;
  };

  const goRightHandler = () => {
    let reviewCard = document.querySelector(".carousel_upper");
    let width = reviewCard.clientWidth;
    reviewCard.scrollLeft = reviewCard.scrollLeft + width / 2.5;
  };

  return (
    <div className="caraousel_container">
      <h2>
        Trusted by Thousands of <br /> Happy Customer{" "}
      </h2>
      <p>
        These are the stories of our customers who have joined us with great <br /> pleasure when using this crazy
        feature.
      </p>

      <div className="carousel_comp_container">
        <div className="carousel_upper">
          <Reviewcard
            src={"../image3.png"}
            name={"Viezh Robert"}
            location="Warsav, Poland"
            reviewtext="Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. <br/> LaslesVPN always the best. "
          />
          <Reviewcard
            src={"../image2.png"}
            name={"Yessica Christy"}
            location="Shanxi, China"
            reviewtext="I like it because I like to travel far and still can connect with hight speed. "
          />
          <Reviewcard
            src={"../image1.png"}
            name={"Kim Young Jou"}
            location="Seoul, South Korea"
            reviewtext="This is very unusual for my business that currently requires a virtual private network that has high security. "
          />
          <Reviewcard
            src={"../image3.png"}
            name={"Viezh Robert"}
            location="Warsav, Poland"
            reviewtext="Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. <br/> LaslesVPN always the best. "
          />
          <Reviewcard
            src={"../image2.png"}
            name={"Yessica Christy"}
            location="Shanxi, China"
            reviewtext="I like it because I like to travel far and still can connect with hight speed. "
          />
          <Reviewcard
            src={"../image1.png"}
            name={"Kim Young Jou"}
            location="Seoul, South Korea"
            reviewtext="This is very unusual for my business that currently requires a virtual private network that has high security. "
          />
        </div>
        <div className="carousel_bottom">
          <div className="carousel_left">
            <div className="dot_big"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="carousel_right">
            <button onClick={goBackHandler}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button onClick={goRightHandler}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
