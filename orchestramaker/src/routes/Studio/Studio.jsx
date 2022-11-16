import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar";
import styled from "styled-components";
import { BaseDiv } from "../../components/Base";
import PianoRoll from "react-piano-roll";

function App() {
  const playbackRef = useRef();

  window.addEventListener("keydown", ({ key }) => {
    if (key === " ") {
      playbackRef.current.toggle("0:0:0");
    } else if (key === "Enter") {
      playbackRef.current.play("0:0:0");
    }
  });

  return (
    <PianoRoll
      ref={playbackRef}
      width={1200}
      height={600}
      // zoom={2}
      resolution={2}
      // gridLineColor={0x333333}
      blackGridBgColor={0x1e1e1e}
      whiteGridBgColor={0x282828}
      noteData={[
        ["0:0:0", "F5", ""],
        ["0:0:0", "C4", "2n"],
        ["0:0:0", "D4", "2n"],
        ["0:0:0", "E4", "2n"],
        ["0:2:0", "B4", "4n"],
        ["0:3:0", "A#4", "4n"],
        ["0:0:0", "F2", ""],
      ]}
    />
  );
}

const WorkDiv = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 240px;
  background-color: white;
  border-right: solid 1px #b6b6b6;
  padding-top: 70px;
`;

function Studio() {
  return (
    <>
      <BaseDiv>
        <Header />
        <Sidebar />
        <WorkDiv>
          <App />
        </WorkDiv>
      </BaseDiv>
    </>
  );
}

export default Studio;
