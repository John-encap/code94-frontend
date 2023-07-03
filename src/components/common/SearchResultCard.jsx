import React from 'react';
import Button from '../common/Button'
import { MdArrowForwardIos } from "react-icons/md";

const SearchResultCard = () => {
    return (
      <div className="flex  w-full h-24 flex-col items-center">
          <div className="flex hover:bg-lightGray transition duration-200 flex-row w-[92%] pl-[1%] h-full items-center">
              <div className="flex gap-1 flex-col w-[80%] text-left">
                <div className="text-primary gap-10">#CA25</div>
                <div className="text-textBlack gap-10">Product1</div>
                <div className="text-darkGray gap-10 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut lectus a risus a nibh massa ut leo.</div>
              </div>
              <Button className="flex w-[20%] text-primary gap-10 justify-center items-center cursor-pointer">
                  <MdArrowForwardIos className='h-5 w-5 hover:h-7 hover:w-7 transition duration-200'/>
              </Button>
          </div>
          <hr className="w-[92%]"></hr>
      </div>
    );
  };

  export default SearchResultCard;