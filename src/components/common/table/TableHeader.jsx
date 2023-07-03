import React from 'react';

const TableHeader = () => {
  return (
    <div className="flex flex-row w-[90%] text-primary">
        <div className="w-[18%] text-left">SKU</div>
        <div className="w-[18%] text-left">IMAGE</div>
        <div className="w-[23%] text-left">PRODUCT NAME</div>
        <div className="w-[18%] text-left">QUANTITY</div>
        <div className="w-[23%] text-left"></div>
    </div>
  );
};

export default TableHeader;