import React from "react";
import "../styles/glitchtext.scss";

type Props = {
  title: string;
};

function TitleGlitch({ title }: Props) {
  return (
    <div className="font-extrabold text-5xl">
      <div className="glitch" data-text={title}>
        {title}
      </div>
      <div className="glow">{title}</div>
    </div>
  );
}

export default TitleGlitch;
