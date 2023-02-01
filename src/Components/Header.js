import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.headerTop}>
        <img className={classes.svg} src="/wareeg.png" alt="name_wareeg" />
        <button className={classes.earlyAccessButton}>Get Early Access</button>
      </div>
      <div className={classes.headerBottom}>
        <div className={classes.headerLeft}>
          <p className={classes.para1}>
            The world’s first-ever Experience-Sharing platform
          </p>
          <p className={classes.para2}>Coming Soon!</p>

          <div className={classes.inputMail}>
            <img
              className={classes.inputMailImg}
              src="/message.png"
              alt="mail"
            />
            <input
              className={classes.inputMailInput}
              type="email"
              placeholder="Enter your Email Address"
            />

            <button className={classes.inputMailButton}>
              Get Early Access
            </button>
          </div>
        </div>
        <div className={classes.headerRight}>
          <img
            className={classes.headerPhone}
            src="/headerPhone.png"
            alt="a phone"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
