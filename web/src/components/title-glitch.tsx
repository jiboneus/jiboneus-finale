import React from "react";
import "../styles/glitchtext.scss";

type Props = {
  title: string;
};

function TitleGlitch({ title }: Props) {
  return (
    <div className="title-glitch-position font-extrabold text-6xl">
      <div className="glitch" data-text={title}>
        {title}
      </div>
      <div className="glow">{title}</div>
    </div>
  );
}

export default TitleGlitch;
