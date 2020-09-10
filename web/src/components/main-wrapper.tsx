import React from "react";

const MainWrapper: React.FC = ({ children }) => {
  return <div className="flex flex-wrap">{children}</div>;
};

export default MainWrapper;
