import React, { useState } from "react";
import { login } from "../../requests";
import {useNavigate} from 'react-router-dom'
import InputField from "../../components/common/input/InputField";

const Login = () => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);
    try {
      const res = await login(details);
      if (res.data.success) {
        localStorage.setItem("accessToken", res.data.accessToken);
        navigate('/product/home')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="mt-[5%] mx-auto w-[400px] h-[400px] bg-white rounded-lg shadow-lg flex flex-col items-center gap-6 border border-darkGray" onSubmit={handleSubmit}>
      <h1 className="mt-10 h-16 text-3xl font-bold">Log In</h1>
      <div className='flex w-[90%] items-center'>
        <label className='w-[30%] font-medium text-textBlack'>{'Email'}</label>
        <input
          className={"w-[70%] h-10 my-2 pl-2 pr-2 bg-lightGray hover:border-none hover:shadow hover:shadow-darkGray transition duration-300 rounded-md focus:outline-primary focus:outline-1 focus:border-primary focus:shadow focus:shadow-primary"}
          onChange={(e) => {
            setDetails({ ...details, email: e.target.value });
          }}
        />
      </div>
      <div className='flex w-[90%] items-center'>
        <label className='w-[30%] font-medium text-textBlack'>{'Password'}</label>
        <input
        label = {'Password'}
        className={"w-[70%] h-10 my-2 pl-2 pr-2 bg-lightGray hover:border-none hover:shadow hover:shadow-darkGray transition duration-300 rounded-md focus:outline-primary focus:outline-1 focus:border-primary focus:shadow focus:shadow-primary"}
        onChange={(e) => {
          setDetails({ ...details, password: e.target.value });
        }}
      />
      </div>
      <button className="text-white h-[40px] mt-6 hover:bg-white hover:text-black hover:border hover:border-primary transition duration-200 bg-primary w-[150px] rounded-lg text-xs" type="submit">Login</button>
    </form>
  );
};

export default Login;
