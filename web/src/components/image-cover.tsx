import React from "react";
import "../styles/scanlines.scss";

type Props = {
  imageAlt: string;
  imageName: string;
};

function ImageCover({ imageName, imageAlt }: Props) {
  const imagePath: string = `/photos/${imageName}`;

  return (
    <div
      className="bg-no-repeat bg-cover bg-right-bottom scanlines z-0"
      style={{
        backgroundImage: `url(${imagePath})`,
        height: "50vh",
      }}
    ></div>
  );
}

export default ImageCover;
