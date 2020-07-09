import React from "react";
import ImageCover from "./components/image-cover";
import TitleGlitch from "./components/title-glitch";
import "./tailwind.output.css";
import "./styles/scanlines.scss";

function App() {
  return (
    <div className="h-screen w-full bg-gray-600 scanlines">
      <TitleGlitch title="JIBONEUS" />
      <ImageCover imageName="mic-hanging.jpg" imageAlt="Hanging Mic" />
    </div>
  );
}

export default App;
