import React from 'react';

const TransparentLogo = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center ${className}`}>
   
      <span className="text-2xl font-bold">
       <img src="/Crossborderpe.png" width={180} alt="" />
      </span>
    </div>
  );
};

export default TransparentLogo;