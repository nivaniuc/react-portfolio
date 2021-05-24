import React from "react";

const Header = () => {
  return (
    <div classNameName="header-wrapper">
      <div className="box-wrap">
        <div className="singlebox">
          <div className="boximage"></div>
          <div className="imagetext"></div>
          <span className="boxheader">
            <strong>About Me</strong>
          </span>
          <p>
            {" "}
            Hello! My name is Nicholas and I am aspiring to be a future software
            and web developer! I love to make things and allow my creative side
            to flourish whenever I can! I hope to add more and more as my
            journey though this bootcamp continues, but for now, enjoy this
            minimalistic portfolio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
