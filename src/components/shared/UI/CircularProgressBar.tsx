import React from "react";

interface CircularProgressProps {
  progress: number; // Progress in percentage (0 - 100)
  size?: number; // Size of the circle
  strokeWidth?: number; // Thickness of the stroke
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  progress,
  size = 150,
  strokeWidth = 4,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="gray"
        strokeWidth={strokeWidth}
        fill="none"
        opacity="0.2"
      />

      {/* Progress Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#14AFF1"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`} // Rotate for proper start position
      />

      {/* Progress Text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="16px"
        fontWeight="bold"
        fill="white"
      >
        About Me
      </text>
    </svg>
  );
};
