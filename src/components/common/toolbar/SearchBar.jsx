import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'; 

const SearchBar = ({ onClick }) => {
  const navigate = useNavigate();
  const [search,setSearch] = useState('');
  return (
    <div className="rounded-full flex flex-row flex-1 gap-2 items-center justify-between p-1 bg-lightGray">
      <input
        className="rounded-full w-full bg-transparent h-[30px] px-4 focus:outline-none placeholder:text-xs"
        placeholder="Search..."
        onChange={(e)=>{
          setSearch(e.target.value); 
        }}
      />
      <button onClick={()=>{
        navigate('/product/search/'+search); 
      }} className="bg-primary hover:bg-white hover:text-black hover:border hover:border-primary transition duration-200 flex flex-row gap-1 items-center justify-center rounded-full text-xs w-[100px] h-[35px] text-white">
        <AiOutlineSearch className="text-lg" />
        <p className="font-semibold">Search</p>
      </button>
    </div>
  );
};

export default SearchBar;