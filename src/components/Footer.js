import React from "react";
import "./footer.css";
import { ReactComponent as Footerlogo } from "../assets/Logo.svg";
import { ReactComponent as TwitterIcon } from "../assets/Twitter.svg";
import { ReactComponent as FacebookIcon } from "../assets/Facebook.svg";
import { ReactComponent as InstaIcon } from "../assets/Instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="col_1">
        <Footerlogo className="footer_logo" />
        <p>
          <b>LaslesVPN</b> is a private virtual network that <br /> has unique features and has high security{" "}
        </p>

        <div className="social_logos">
          <Link to="/" className="link_footer">
            {" "}
            <FacebookIcon className="social_icon" />
          </Link>
          <Link to="/" className="link_footer">
            {" "}
            <TwitterIcon className="social_icon" />
          </Link>
          <Link to="/" className="link_footer">
            {" "}
            <InstaIcon className="social_icon" />
          </Link>
        </div>

        <p className="copyright_text">&copy; 2020 LaslesVPN</p>
      </div>
      <div className="col_2">
        <ul>
          <li className="footer_links_first">
            <b>Product</b>
          </li>
          <li>
            <Link to="/" className="link_footer">
              Download
            </Link>
          </li>
          <li>
            <Link to="/" className="link_footer">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/" className="link_footer">
              Locations
            </Link>
          </li>
          <li>
            <Link to="/" className="link_footer">
              Server
            </Link>
          </li>
          <li>
            <Link to="/" className="link_footer">
              Countries
            </Link>
          </li>
          <li>
            <Link to="/" className="link_footer">
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="col_3">
        <ul>
          <li className="footer_links_first">
            <b>Engage</b>
          </li>
          <li>
            <Link to="/" className="link_footer">
              LaslesVPN ?
            </Link>
          </li>
          <li>
            <Link to="/" className="link_footer">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/" className="link_footer">
              Tutorials
            </Link>
          </li>
          <li>
            <Link to="/" className="link_footer">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className="link_footer">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/" className="link_footer">
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
      <div className="col_4">
        <ul>
          <li className="footer_links_first">
            <b>Earn Money</b>
          </li>
          <li>
            <Link to="/" className="link_footer">
              Affiliate
            </Link>
          </li>
          <li>
            <Link to="/" className="link_footer">
              Become Partner
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
