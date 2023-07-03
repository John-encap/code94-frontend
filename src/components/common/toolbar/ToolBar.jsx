import React from 'react';
import SearchBar from './SearchBar';
import { AiFillStar , AiOutlineSearch , AiOutlineStar } from "react-icons/ai";

const ToolBar = ({ children }) => {
  return (
    <div className="flex gap-[30%] flex-row justify-between">
        <SearchBar/>
        <div className="flex flex-row gap-4">
            <button className="text-white hover:bg-white hover:text-black hover:border hover:border-primary transition duration-200 bg-primary w-[150px] rounded-lg text-xs">
            New Product
            </button>
            <button className="flex hover:scale-105 text-primary transition duration-200 items-center justify-center border px-4 rounded-lg border-primary">
            <AiFillStar className="text-2xl"/>
            </button>
        </div>
    </div>
  );
};

export default ToolBar;