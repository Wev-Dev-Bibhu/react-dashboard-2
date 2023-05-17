import React from "react";

const RenderIcons = ({ iconType, title, active, setActiveTab }) => {
  return (
    <div
      key={title}
      className="flex flex-col justify-center text-gray-100 bg-blue-600 text-center p-1 mb-1 rounded-sm"
      style={{
        background: active === title ? "#0050f0" : "#0044d0",
      }}
      onClick={() => setActiveTab(title)}
    >
      <span>{iconType}</span>
      <p className="font-thin text-sm ">{title}</p>
    </div>
  );
};

export default RenderIcons;
