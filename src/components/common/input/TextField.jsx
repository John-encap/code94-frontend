import React from 'react';

const TextField = (props) => {
  return (
      <div className='flex flex-col w-full items-left gap-2'>
        <label className='font-medium text-textBlack'>{props.label}</label>
        <label className='font-sm text-darkGray'>{'A small description about the product'}</label>
        <textarea defaultValue={props.defaultValue} onChange={props.onChange} className='h-28 py-2 px-4 placeholder:text-sm bg-lightGray hover:border-none hover:shadow hover:shadow-darkGray transition duration-300 rounded-md focus:outline-primary focus:outline-1 focus:border-primary focus:shadow focus:shadow-primary' />
      </div>
  );
};

export default TextField;