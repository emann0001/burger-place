import React from "react";

const LoadingRing = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-yellow-500"></div>
    </div>
  );
};

export default LoadingRing; // ✅ Ensure default export
