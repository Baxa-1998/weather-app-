import React from 'react'
import { FiSearch } from "react-icons/fi";


interface IInputProps {
  handleSearch: (event:React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearchKey: (event:React.MouseEvent<HTMLDivElement>) => void; 
  setCity: (str: string) => void
}

export const Input: React.FC<IInputProps> = ({handleSearch, setCity, handleSearchKey}: IInputProps) => {
  return (
    <form  className='relative z-[2] flex items-center md:w-2/4 w-full'>
      <input onChange={(e)=> setCity(e.target.value)} onKeyDown={handleSearch} className='w-full bg-transparent border-b-2 placeholder-white outline-none text-white text-[20px]' type="text" placeholder='Search city'/> 
      <div  className='ml-[-25px] text-white cursor-pointer' onClick={handleSearchKey}><FiSearch /></div>
    </form>
  )
}
