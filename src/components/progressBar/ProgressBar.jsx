import React from 'react';

const ProgressBar = ({ value, color }) => {
  const radius = 50;
  const strokeWidth = 10; 
  const circumference = 2 * Math.PI * radius; 
  const progress = value / 100 * (circumference / 2); 

  return (
    <div className="relative flex justify-center items-center w-24 h-20">
      <svg
        width="140"
        height="100"
        viewBox="0 0 140 100"
        className="absolute"
      >
        <circle
          cx="65"
          cy="65"
          r={radius}
          stroke="#e6e6e6" 
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference / 2} 
          transform="rotate(-180 65 65)" 
        />
        <circle
          cx="65"
          cy="65"
          r={radius}
          stroke={color} 
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference / 2} 
          strokeDashoffset={(circumference / 2) - progress} 
          strokeLinecap="round"
          transform="rotate(-180 65 65)" 
        />
      </svg>
      <div className="absolute text-xl font-bold p-4"  >
        {value}%
      </div>
    </div>
  );
};

export default ProgressBar;
