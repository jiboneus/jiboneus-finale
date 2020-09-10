import React from "react";
import "../styles/glitchtext.scss";

type props = {
  text: string;
};

const TitleSynthesizer: React.FC<props> = ({ text }) => {
  return (
    <div className="relative font-extrabold text-4xl py-2 px-2 z-30">
      <div className="glitch" data-text={text}>
        {text}
      </div>
      <div className="glow">{text}</div>
    </div>
  );
};

export default TitleSynthesizer;
