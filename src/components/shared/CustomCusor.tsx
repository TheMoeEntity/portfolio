"use client";

import { useEffect, useState } from "react";
import { fairyDustCursor, trailingCursor } from "cursor-effects"; // Use camelCase

const CustomCursor = () => {
  const [effect, setEffect] = useState<"fairyDust" | "trailing">("trailing");

  useEffect(() => {
    let cursor: fairyDustCursor | trailingCursor;

    if (effect === "fairyDust") {
      cursor = new fairyDustCursor({
        colors: ["white", "#14AFF1"],
        size: 5,
      });
    } else if (effect === "trailing") {
      cursor = new trailingCursor({
        particles: 10,
        rate: 0.4,
      });
    }

    return () => {
      if (cursor) cursor.destroy();
    };
  }, [effect]);

  return (
    <div className="hidden">
      <button onClick={() => setEffect("fairyDust")}>Fairy Dust</button>
      <button onClick={() => setEffect("trailing")}>Trailing</button>
    </div>
  );
};

export default CustomCursor;
