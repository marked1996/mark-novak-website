import React from "react";

const Beacon = () => {
  return (
    <div className="flex items-center px-3 py-1  rounded-full bg-markblue/25 font-medium">
      {/* <div className="mr-2  rounded-full h-2 w-2 bg-blue-500 animate-pulse"></div> */}
      <span className="relative flex h-2 w-2 mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
      </span>
      <p className="text-xs leading-5 text-blue-500">Available for work</p>
    </div>
  );
};

export default Beacon;
