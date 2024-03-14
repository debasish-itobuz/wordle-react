import React, { useState, createContext } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault } from "./Words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App bg-black ">
      <nav className="p-3 border-b-2 mb-8">
        <h1 className="font-bold text-center text-4xl text-white">Wordle</h1>
      </nav>
      <section className="w-100 h-screen flex flex-col items-center gap-12">
        <AppContext.Provider value={{ board, setBoard }}>
          <Board />
          <Keyboard />
        </AppContext.Provider>
      </section>
    </div>
  );
}

export default App;
