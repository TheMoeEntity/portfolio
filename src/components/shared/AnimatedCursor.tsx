import React from "react";
import AnimatedCursor from "react-animated-cursor";

const Animated_Cursor = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8} // Small inner dot
        outerSize={35} // Larger outer ring
        color="20, 175, 241" // #14AFF1 in RGB
        outerAlpha={0.3} // Slightly transparent ring
        innerScale={0.7} // Subtle scale on hover
        outerScale={5} // Dramatic ring expansion on hover
        clickables={[
          "a", // Changes cursor on <a> tags
          "button", // Changes cursor on <button> tags
          ".custom-link", // Changes cursor on elements with this class
          {
            target: ".airtimeplus", // Special elements
            innerSize: 12, // No 'options' nesting
            outerSize: 12,
            color: "193, 11, 111", // Same #14AFF1
            outerAlpha: 0.4,
            innerScale: 0.7,
            outerScale: 6,
          },
          {
            target: ".artelia", // Special elements
            innerSize: 12, // No 'options' nesting
            outerSize: 12,
            color: "#C8B9A6", // Same #14AFF1
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
