import React from "react";
import ImageCover from "./components/image-cover";
import TitleGlitch from "./components/title-glitch";
import HomepageContent from "./components/homepage-content";
import "./tailwind.output.css";

function App() {
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
      <div className="w-full p-3">next</div>
    </div>
  );
}

export default App;
