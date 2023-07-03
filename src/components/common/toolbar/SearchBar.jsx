import React from 'react';
import { AiFillStar , AiOutlineSearch , AiOutlineStar } from "react-icons/ai";

const SearchBar = ({ onClick }) => {
  return (
    <div className="rounded-full flex flex-row flex-1 gap-2 items-center justify-between p-1 bg-lightGray">
      <input
        className="rounded-full w-full bg-transparent h-[30px] px-4 focus:outline-none placeholder:text-xs"
        placeholder="Search..."
      />
      <button className="bg-primary hover:bg-white hover:text-black hover:border hover:border-primary transition duration-200 flex flex-row gap-1 items-center justify-center rounded-full text-xs w-[100px] h-[35px] text-white">
        <AiOutlineSearch className="text-lg" />
        <p className="font-semibold">Search</p>
      </button>
    </div>
  );
};

export default SearchBar;