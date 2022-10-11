import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const gitIconHandler = () => {
    window.location.href="https://github.com/kimmingyu0"
  }
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>대구광역시 중구 남산동</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              010-7559-5808
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              minku4820@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>방문해주셔서 감사합니다.</h4>
          <p>유저에게 편안함을 선사하는 개발자가 되고픈 김민규입니다.</p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem", cursor:"pointer" }}
              onClick={gitIconHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
