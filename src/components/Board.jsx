import React from "react";

import Letter from "./Letter";

const Board = () => {
  return (
    <div className="Board gap-1 w-[400px] h-[400px] flex flex-col">
      <div className="row gap-1 flex h-full">
        <Letter letterPos={0} attemptVal={0}></Letter>
        <Letter letterPos={1} attemptVal={0}></Letter>
        <Letter letterPos={2} attemptVal={0}></Letter>
        <Letter letterPos={3} attemptVal={0}></Letter>
        <Letter letterPos={4} attemptVal={0}></Letter>
      </div>
      <div className="row gap-1 flex h-full">
        <Letter letterPos={0} attemptVal={0}></Letter>
        <Letter letterPos={1} attemptVal={0}></Letter>
        <Letter letterPos={2} attemptVal={0}></Letter>
        <Letter letterPos={3} attemptVal={0}></Letter>
        <Letter letterPos={4} attemptVal={0}></Letter>{" "}
      </div>
      <div className="row gap-1 flex h-full">
        <Letter letterPos={0} attemptVal={1}></Letter>
        <Letter letterPos={1} attemptVal={1}></Letter>
        <Letter letterPos={2} attemptVal={1}></Letter>
        <Letter letterPos={3} attemptVal={1}></Letter>
        <Letter letterPos={4} attemptVal={1}></Letter>{" "}
      </div>
      <div className="row gap-1 flex h-full">
        <Letter letterPos={0} attemptVal={2}></Letter>
        <Letter letterPos={1} attemptVal={2}></Letter>
        <Letter letterPos={2} attemptVal={2}></Letter>
        <Letter letterPos={3} attemptVal={2}></Letter>
        <Letter letterPos={4} attemptVal={2}></Letter>{" "}
      </div>
      <div className="row gap-1 flex h-full">
        <Letter letterPos={0} attemptVal={3}></Letter>
        <Letter letterPos={1} attemptVal={3}></Letter>
        <Letter letterPos={2} attemptVal={3}></Letter>
        <Letter letterPos={3} attemptVal={3}></Letter>
        <Letter letterPos={4} attemptVal={3}></Letter>{" "}
      </div>
      <div className="row gap-1 flex h-full">
        <Letter letterPos={0} attemptVal={4}></Letter>
        <Letter letterPos={1} attemptVal={4}></Letter>
        <Letter letterPos={2} attemptVal={4}></Letter>
        <Letter letterPos={3} attemptVal={4}></Letter>
        <Letter letterPos={4} attemptVal={4}></Letter>{" "}
      </div>
    </div>
  );
};

export default Board;
