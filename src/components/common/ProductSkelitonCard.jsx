import React from 'react';

const ProductSkelitonCard = ()=>{
    return(    
    <div className="flex  w-full h-24 flex-col items-center">
        <div className="flex animate-pulse -z-10 flex-row w-[90%] h-full items-center">
        <div className="w-[18%] text-left text-darkGray"><div className="w-[100px] h-[6px] bg-gray-200 rounded-full"/></div>
            <div className="w-[18%] text-left"><div className="w-20 h-20 rounded-md bg-gray-200"/></div>
            <div className="w-[23%] text-left text-textBlack"><div className="w-[100px] h-[6px] bg-gray-200 rounded-full"/></div>
            <div className="w-[18%] text-left text-textBlack"><div className="w-[100px] h-[6px] bg-gray-200 rounded-full"/></div>
            <div className="flex w-[23%] text-primary gap-10 justify-center">
            <div className="w-[100px] h-[6px] bg-gray-200 rounded-full"/>
            </div>
        </div>
        <hr className="w-[92%]"></hr>
    </div>
    )
}

  export default ProductSkelitonCard;