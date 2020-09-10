import React from "react";
import "../styles/scanlines.scss";

const ImageVisualizer: React.FC = ({ children }) => {
  return (
    <div className="component-imagevisualizer scanlines absolute top-0 left-0 right-0 left-0 bg-black z-10 container h-full">
      <img
        alt="Mic down."
        src="/photos/mic-hanging.jpg"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default ImageVisualizer;
