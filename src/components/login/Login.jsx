import React from "react";

import logo from "../../assets/logo.svg";
//#1D9399

const Login = () => {
  const loginformSubmitHadler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="absolute h-screen w-screen bg-gray-100 top-0 left-0 flex justify-center items-center">
      <form
        onSubmit={(e) => loginformSubmitHadler(e)}
        className="px-10  font-Vazir flex flex-col bg-white rounded-lg"
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
      </form>
    </div>
  );
};

export default Login;
