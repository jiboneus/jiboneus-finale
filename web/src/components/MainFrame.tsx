import React from "react";

const MainFrame: React.FC = ({ children }) => {
  return (
    <div className="component-mainframe relative w-screen h-screen py-2 px-2">
      {children}
    </div>
  );
};

export default MainFrame;
