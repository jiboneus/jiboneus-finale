import React from "react";

function LeftArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-arrow-left-circle inline-block"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <circle cx="12" cy="12" r="9" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="12" x2="12" y2="16" />
      <line x1="8" y1="12" x2="12" y2="8" />
    </svg>
  );
}

export default LeftArrow;
