import React from "react";
import sadImg from "../images/sad.svg";

const PageNotFound = () => {
  return (
    <div className="flex justify-center align-center h-screen flex-col">
      <img className="h-32 opacity-10" src={sadImg} alt="sad-icon" />
      Page Not Found
    </div>
  );
};

export default PageNotFound;
