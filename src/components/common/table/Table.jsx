import React from 'react';

const Table = ({ children }) => {
  return (
    <div className="flex flex-col gap-4 w-full items-center mt-8">
        {children}
    </div>
  );
};

export default Table;