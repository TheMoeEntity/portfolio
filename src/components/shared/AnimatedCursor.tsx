import React from "react";
import AnimatedCursor from "react-animated-cursor";

const Animated_Cursor = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="0, 119, 255" // #0077ff in RGB
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          "button",
          ".custom-link",
          {
            target: ".airtimeplus",
            innerSize: 12,
            outerSize: 12,
            color: "#0077ff",
            outerAlpha: 0.4,
            innerScale: 0.7,
            outerScale: 6,
          },
          {
            target: ".artelia",
            innerSize: 12,
            outerSize: 12,
            color: "#C8B9A6",
            outerAlpha: 0.4,
            innerScale: 0.7,
            outerScale: 6,
          },
        ]}
      />
    </>
  );
};

export default Animated_Cursor;
