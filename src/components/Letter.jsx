import React, { useContext } from "react";
import { AppContext } from "../App";

const Letter = ({ letterPos, attemptVal }) => {
  const { board } = useContext(AppContext);

  const letter = board[attemptVal][letterPos];
  console.log(letter);
  return (
    <div className="border h-full w-full border-1 border-neutral-600 text-white flex justify-center items-center font-bold text-2xl">
      {letter}
    </div>
  );
};

export default Letter;
