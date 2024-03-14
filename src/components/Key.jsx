import React, { useContext } from 'react'
import { AppContext } from '../App';

const Key = ({keyVal, index, setIndex}) => {
    const {board, setBoard } = useContext(AppContext);
    function handleKey(e){
        setBoard((previous)=>{
                const updatedBoard = [...previous.map(row=>[...row])]
                console.log(updatedBoard);
        })
    }

  return (
    
      <div className=' px-1 py-2 bg-slate-600 h-[3rem] w-[2.5rem] flex justify-center items-center rounded-lg' onClick={handleKey}>{keyVal}</div>
    
  )
}

export default Key
