import React, {useState} from "react";
import Key from "./Key";

const Keyboard = () => {
  const [index, setIndex] = useState({row:0,col:0})


  const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  return (
    <div className="keyboard flex flex-col items-center gap-4">
      {keys.map((row, i) => (
        <div className="line1 gap-4 flex text-white ">
          {i === 2 && (
            <div className=" px-1 py-2 bg-slate-600 h-[3rem] w-[5rem] flex justify-center items-center rounded-lg">
              Enter
            </div>
          )}
          {row.map((key) => {
            return <Key keyVal={key} index={index}  setIndex={setIndex}/>;
          })}
          {i === 2 && (
            <div className=" px-1 py-2 bg-slate-600 h-[3rem] w-[5rem] flex justify-center items-center rounded-lg">
              Del
            </div>
          )}
        </div>
      ))}
      {/* <div className='line1 gap-4 flex text-white '>{keys1.map((key)=>{
        return <Key keyVal={key}/>
      })}</div>
      <div className='line2 gap-4 flex text-white'>{keys2.map((key)=>{
        return <Key keyVal={key}/>
      })}</div>
      <div className='line3 gap-4 flex text-white'>{keys3.map((key)=>{
        return <Key keyVal={key}/>
      })}</div> */}
    </div>
  );
};

export default Keyboard;
