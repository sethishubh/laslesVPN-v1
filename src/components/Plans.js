import React from "react";
import { ReactComponent as Freebox } from "../assets/Free.svg";
import "./plans.css";

const Plans = () => {
  return (
    <div className="plans_container">
      <h2>Choose Your Plan</h2>
      <p>
        Let's choose the package that is best for you and explore it happily and <br /> cheerfully.
      </p>

      <div className="plans_items">
        <div className="plan_one">
          <Freebox className="freebox_svg" />
          <h2>Free Plan</h2>
          <ul>
            <li>
              <i className="fa-solid fa-check"></i> Unlimited Bandwidth
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Encrypted Connection
            </li>
            <li>
              <i className="fa-solid fa-check"></i> No Traffic Logs
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Works on All Devices
            </li>
          </ul>

          <h2>Free</h2>
          <button>Select</button>
        </div>
        <div className="plan_two">
          <Freebox className="freebox_svg" />
          <h2>Standard Plan</h2>
          <ul>
            <li>
              <i className="fa-solid fa-check"></i> Unlimited Bandwidth
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Encrypted Connection
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Yes Traffic Logs
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Works on All Devices
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Connected Anywhere
            </li>
          </ul>

          <h2>
            $9 <span> / mo</span>
          </h2>
          <button>Select</button>
        </div>
        <div className="plan_three">
          <Freebox className="freebox_svg" />
          <h2>Premium Plan</h2>
          <ul>
            <li>
              <i className="fa-solid fa-check"></i> Unlimited Bandwidth
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Encrypted Connection
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Yes Traffic Logs
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Works on All Devices
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Connected Anywhere
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Get New Features
            </li>
          </ul>

          <h2>
            $12 <span> / mo</span>
          </h2>
          <button>Select</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
