import Image from 'next/image';
import React from 'react';

const CrossBorderPELogo = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl font-bold">
        <Image height={100} src="/Crossborderpe_colored.png" width={200} alt="CrossBorderPe Logo" />
      </span>
    </div>
  );
};

export default CrossBorderPELogo;
