import React from 'react';

const InputField = (props) => {
  const { className, type, name, value,defaultValue, onChange, placeholder, required, disabled, readOnly, autoFocus, autoComplete, maxLength, minLength, pattern, size, checked, accept, multiple, min, max ,label} = props;
  let classname 
  switch(className){
    case "primary":
      classname = "w-[85%] h-10 my-2 pl-2 pr-2 bg-lightGray hover:border-none hover:shadow hover:shadow-darkGray transition duration-300 rounded-md focus:outline-primary focus:outline-1 focus:border-primary focus:shadow focus:shadow-primary";
      break;
    default:
      classname = className
      break;
  }
  return (
      <div className='flex w-full items-center'>
        <label className='w-[15%] font-medium text-textBlack'>{label}</label>
        <input
            className={classname}
            type={type}
            name={name}
            value={value}
            defaultValue={defaultValue} 
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            maxLength={maxLength}
            minLength={minLength}
            pattern={pattern}
            size={size}
            checked={checked}
            accept={accept}
            multiple={multiple}
            min={min}
            max={max}
        />
      </div>
  );
};

export default InputField;