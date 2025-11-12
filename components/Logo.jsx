import React from 'react';

const CrossBorderPELogo = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold">
        <img src="/Crossborderpe_colored.png" width={180} alt="CrossBorderPe Logo" />
      </span>
    </div>
  );
};

export default CrossBorderPELogo;
