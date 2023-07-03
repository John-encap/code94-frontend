import React from 'react';

const TableBody = ({children}) => {
  return (
    <div className="flex w-full items-center flex-col gap-1 mt-2">
        {children}
    </div>
  );
};

export default TableBody;