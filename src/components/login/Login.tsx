import React, { useState,useContext } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { LoginContext } from "../../contexts/loginContext.jsx";
import logo from '../../assets/logo.svg';
import { motion as m } from "framer-motion";

const Login: React.FC = () => {
  const [username, setUsername] = useState("+98");
  const [login, setLogin, profile, setProfile] = useContext(LoginContext);
  const navigate = useNavigate();

  const loginformSubmitHandler = async (e) => {
    e.preventDefault();

    if (username !== "") {
      const phoneRegex = /^\+?[0-9]{10,14}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (phoneRegex.test(username) || emailRegex.test(username)) {
        axios.get('http://localhost:3000/data')
          .then(async response => {
              const data = response.data
              if(username === data.mobile){
                  await setLogin(true)
                  localStorage.setItem('token', data.token)
                  setProfile(() =>(data))
                  setTimeout(() => {
                    navigate('/')
                  }, 1500);
              }
          })
          .catch(error => {
              console.log(error)
          });
      }
      
    }
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="absolute h-screen w-screen bg-gray-100 top-0 left-0 flex flex-col justify-center items-center">
      <m.form
        initial={{ left: -5, opacity: 0 }}
        animate={{ left: 0, opacity: 1 }}
        onSubmit={(e) => loginformSubmitHandler(e)}
        className="px-10 relative font-Vazir flex flex-col bg-white rounded-lg"
      >
        <img
          src={logo}
          className="w-52 mx-auto
        "
          alt="MEFARO"
        />
        <h1 className="mb-8 font-semibold text-3xl">ورود | عضویت</h1>
        <div className="flex flex-col w-full mx-auto">
          <label htmlFor="username" className="text-xl mb-3">
            شماره موبایل خود را در فیلد زیر وارد کنید
          </label>
          <input
            dir="ltr"
            value={username}
            required
            onInput={(e) => usernameChangeHandler(e)}
            className="w-full bg-gray-100 border  placeholder:text-black/60 font-semibold focus:bg-gray-50 transition-all py-4 outline-none text-center my-3 rounded"
            type="tel"
            name="username"
            
            id="username"
            placeholder="شماره موبایل خود را با 98+ وارد کنید"
          />
        </div>
        <p className="font-sm font-light ">
          ورود شما به معنای پذیرش{" "}
          <span className="text-[#1D9399]">شرایط میفارو</span> و
          <span className="text-[#1D9399]">حریم خصوصی</span> است.
        </p>
        <button className="w-full text-center py-2 my-8 active:scale-95 transition-all hover:bg-[#1e858a] rounded text-white bg-[#1D9399] text-xl">
          تایید
        </button>
      </m.form>
      {
        login ? (
          <m.p
            initial={{ scale: 0.2 }}
            animate={{ scale: 1 }}
            className="bg-green-100 font-Vazir rounded-lg py-2 px-5 text-green-500 border-b-4 border-green-500 my-2"
          >
      {
        profile.first_name
      } عزیز، شما به اکانت خود وارد شدید
          </m.p>
        ) : null
      }
    </div>
  );
};

export default Login;
