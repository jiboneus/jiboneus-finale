// import React, { useState } from "react";
import React from "react";
//import { useTransition, animated, config } from "react-spring";
// import ImageCover from "./components/image-cover";
// import TitleGlitch from "./components/title-glitch";
// import HomepageContent from "./components/homepage-content";
// import RightArrow from "./components/right-arrow";
// import LeftArrow from "./components/left-arrow";
// import ButtonGlitch from "./components/button-glitch";
import SiteContainer from "./components/site-container";
import "./tailwind.output.css";

type ImageDetails = {
  id: number;
  path: string;
  title: string;
  subTitle: string;
};

function App() {
  //const [imageCurrentIndex, setImageCurrentIndex] = useState<number>(0);
  /*
  const images: ImageDetails[] = [
    {
      id: 0,
      path: "/photos/butterfingers-gua-com-my.jpg",
      title: "Butterfingers",
      subTitle: "Gua.com.my concert",
    },
    {
      id: 1,
      path: "/photos/meet-uncle-husein-gua-com-my.jpg",
      title: "Meet Uncle Husein",
      subTitle: "Gua.com.my concert",
    },
  ];

  const transitions = useTransition(
    images[imageCurrentIndex],
    (item) => item.id,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    }
  );
*/
  /*
  const handleLeftArrowClick = () => {
    console.log("handle left arrow click");
  };

  const handleRightArrowClick = () => {
    console.log("handle right arrow click");
  };
*/
  // const handleButtonClick = () => {
  //   console.log("handle button click");
  // };
  return <SiteContainer>testing</SiteContainer>;
  /*
  return (
    <div className="flex flex-wrap">
      <div className="w-full min-h-full p-3 relative">
        <div className="absolute pl-4 z-10">
          <TitleGlitch title="JIBONEUS" />
        </div>
        <ImageCover imageName="mic-hanging.jpg" imageAlt="Hanging Mic" />
      </div>
      <div className="w-full p-3">
        <HomepageContent />
      </div>
      <div className="w-full p-3 text-right">
        <ButtonGlitch label="Gallery" onClick={handleButtonClick} />
      </div>
    </div>
  );
  */
}

export default App;
