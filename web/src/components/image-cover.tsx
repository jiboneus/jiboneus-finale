import React from "react";

type Props = {
  imageAlt: string;
  imageName: string;
};

function ImageCover({ imageName, imageAlt }: Props) {
  const imagePath: string = `/photos/${imageName}`;

  return (
    <div>
      <img
        className="object-cover h-screen w-full"
        alt={imageAlt}
        src={imagePath}
      />
    </div>
  );
}

export default ImageCover;
