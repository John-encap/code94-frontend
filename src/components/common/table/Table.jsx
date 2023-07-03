import React from 'react';

const Table = ( {children , marginT}) => {
  return (
    <div className={`flex flex-col gap-4 w-full items-center ${marginT}`}>
        {children}
    </div>
  );
};

export default Table;