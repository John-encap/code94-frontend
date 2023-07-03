import React from 'react';
import { AiFillStar , AiOutlineSearch , AiOutlineStar } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { RiDeleteBin7Fill } from "react-icons/ri";
import profile from '../../images/profile.jpg'

const ProductCard = () => {
    return (
      <div className="flex  w-full h-24 flex-col items-center">
          <div className="flex hover:bg-lightGray transition duration-200 cursor-pointer flex-row w-[92%] pl-[1%] h-full items-center">
              <div className="w-[18%] text-left text-darkGray">#CA25</div>
              <div className="w-[18%] text-left"><img className="w-20 h-20 rounded-md" src={profile}></img></div>
              <div className="w-[23%] text-left text-textBlack">Product 1</div>
              <div className="w-[18%] text-left text-textBlack">28</div>
              <div className="flex w-[23%] text-primary gap-10 justify-center">
                  <button className="h-5 w-5"><RiDeleteBin7Fill className="hover:h-5 hover:w-5 transition-all duration-200"/></button>
                  <button className="h-5 w-5"><BsPencilFill className="hover:h-5 hover:w-5 transition-all duration-200"/></button>
                  <button className="h-5 w-5"><AiOutlineStar className="hover:h-5 hover:w-5 transition-all duration-200"/></button>
              </div>
          </div>
          <hr className="w-[92%]"></hr>
      </div>
    );
  };

  export default ProductCard;