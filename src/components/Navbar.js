import React from "react";
import "./Navbar.css";
import Logo from "../assets/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav_header">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="nav_links_container">
        <ul>
          <li>
            <Link className="nav_link" to="/">
              About
            </Link>
          </li>
          <li>
            <Link className="nav_link" to="/">
              Features
            </Link>
          </li>
          <li>
            <Link className="nav_link" to="/">
              Pricing
            </Link>
          </li>
          <li>
            <Link className="nav_link" to="/">
              Testinomials
            </Link>
          </li>
          <li>
            <Link className="nav_link" to="/">
              Help
            </Link>
          </li>
        </ul>
      </div>
      <div className="sinsup_btns">
        <button className="sIn_Btn">
          <strong>Sign In</strong>
        </button>
        <button className="sOut_Btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
