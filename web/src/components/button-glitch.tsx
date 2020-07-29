import React from "react";
import "./../styles/glitchbutton.scss";

type Props = {
  label: string;
  onClick(): void;
};

function ButtonGlitch({ label, onClick }: Props) {
  const LabelDisplay = () => {
    return (
      <div className="glitch-button" data-text={label}>
        {label}
      </div>
    );
  };
  return (
    <button
      onClick={onClick}
      className="bg-gray-700 text-white font-bold py-2 px-4 rounded relative"
    >
      <LabelDisplay />
    </button>
  );
}
export default ButtonGlitch;
