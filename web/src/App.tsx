import React from "react";
import CyberSpace from "./components/CyberSpace";
import MainFrame from "./components/MainFrame";
import ImageVisualizer from "./components/ImageVisualizer";
import TitleSynthesizer from "./components/TitleSynthesizer";
import NavigationSequencer from "./components/NavigationSequencer";
import ContentVersificator from "./components/ContentVersificator";
import "./tailwind.output.css";

function App() {
  return (
    <CyberSpace>
      <MainFrame>
        <ImageVisualizer />
        <TitleSynthesizer text="TESTING" />
        <ContentVersificator />
        <NavigationSequencer />
      </MainFrame>
    </CyberSpace>
  );
}

export default App;
