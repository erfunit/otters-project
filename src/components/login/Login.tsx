import React, { useState } from "react";

import logo from "../../assets/logo.svg";
import { motion as m } from "framer-motion";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  let [validate, setValidate] = useState<boolean>(true);
  let [hasaccount, setHasaccount] = useState<boolean>(true);

  const loginformSubmitHadler = (e) => {
    e.preventDefault();

    //Phone number regular expression
    const phoneRegex = /^\+?[0-9]{10,14}$/;

    // Email address regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (phoneRegex.test(username)) {
      setValidate(true);
      if (username === "09102642673") {
        setHasaccount(true);
      } else {
        setHasaccount(false);
      }
    } else if (emailRegex.test(username)) {
      setValidate(true);
      if (username === "email@gmail.com") {
        setHasaccount(true);
      } else {
        setHasaccount(false);
      }
    } else {
      setValidate(false);
      setHasaccount(false);
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
        onSubmit={(e) => loginformSubmitHadler(e)}
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
            نام کاربری
          </label>
          <input
            dir="ltr"
            value={username}
            onInput={(e) => usernameChangeHandler(e)}
            className="w-full bg-gray-100 border  placeholder:text-black/60 font-semibold focus:bg-gray-50 transition-all py-4 outline-none text-center my-3 rounded"
            type="text"
            name="username"
            id="username"
            placeholder="لطفا شماره موبایل یا ایمیل خود را وارد کنید"
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
        !validate ? (
          <m.p initial={{scale: 0.2}} animate={{scale: 1}} className="bg-red-100 font-Vazir rounded-lg py-2 px-5 text-red-500 border-b-4 border-red-500 my-2">نام کاربری یا ایمیل وارد شده صحیح نمیباشد</m.p>
        ) : !hasaccount ? (
          <m.div initial={{scale: 0.2}} animate={{scale: 1}}
         
          >
            <p  className="bg-red-100 font-Vazir rounded-lg py-2 px-5 text-red-500 border-b-4 border-red-500 my-2">احتمالا هنوز در وبسایت ما اکانتی ندارید</p>
          <a href="#" className="text-center w-full bg-green-500 hover:bg-green-600 transition-all text-white my-2 py-2 rounded-md
           block">ثبت نام</a>
          </m.div>
        ) : null
      }
      
    </div>
  );
};

export default Login;
