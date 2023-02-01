import React, { useState } from "react";
import classes from "./Switch.module.css";
import Body1 from "./Body1";

const ImageSlider = () => {
  const [isExperiencer, setIsExperiencer] = useState(true);
  return (
    <>
      <div className={classes.toggleButton}>
        <button
          onClick={() => setIsExperiencer(true)}
          className={`${classes.toggleButtons} ${
            isExperiencer && classes.toggleLeft
          }`}
        >
          Experiencer
        </button>
        <button
          onClick={() => setIsExperiencer(false)}
          className={`${classes.toggleButtons} ${
            !isExperiencer && classes.toggleRight
          }`}
        >
          Local
        </button>
      </div>
      <Body1 />
    </>
  );
};

export default ImageSlider;
