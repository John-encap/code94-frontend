import React from 'react';
import SearchBar from './SearchBar';
import { AiFillStar , AiOutlineSearch , AiOutlineStar } from "react-icons/ai";
import Button from '../Button'
import { useNavigate } from 'react-router-dom';

const ToolBar = () => {
    const navigate = useNavigate();
    const handleFav = () =>{
        navigate("/product/favourits")
    }
    return (
    <div className="flex gap-[30%] flex-row justify-between">
        <SearchBar/>
        <div className="flex flex-row gap-4">
            <Button className="text-white hover:bg-white hover:text-black hover:border hover:border-primary transition duration-200 bg-primary w-[150px] rounded-lg text-xs">
                New Product
            </Button>
            <Button onClick={handleFav} className="flex hover:scale-105 text-primary transition duration-200 items-center justify-center border px-4 rounded-lg border-primary">
                <AiFillStar className="text-2xl"/>
            </Button>
        </div>
    </div>
    );
};

export default ToolBar;