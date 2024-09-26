import React from 'react';

const CustomShapeDivider = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-[133%] svg-wave" // Custom class for media queries
        style={{
          transform: 'scaleX(-1)',  // Flip horizontally
        }}
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="fill-white"
        />
      </svg>
    </div>
  );
};

export default CustomShapeDivider;
