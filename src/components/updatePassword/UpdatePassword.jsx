import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import {
  AiOutlineEye as Show,
  AiOutlineEyeInvisible as Hide,
} from "react-icons/ai";

const UpdatePassword = () => {
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [showpass, setShowPass] = useState(false);
  const [showpassConfirm, setShowPassConfirm] = useState(false);
  const [error, setError] = useState(false);
  const [validate, setValidate] = useState(false);
  const navigate = useNavigate();

  const changePasswordHandler = (e) => {
    e.preventDefault();
    if (pass === passConfirm) {
      setValidate(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      setError(true);
      return;
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  });

  return (
    <div className="absolute font-Vazir top-0 left-0 flex flex-col justify-center items-center bg-gray-100 w-full h-screen">
      <m.form
        initial={{ left: -5, opacity: 0 }}
        animate={{ left: 0, opacity: 1 }}
        onSubmit={(e) => changePasswordHandler(e)}
        className="w-full max-w-3xl relative mx-auto flex flex-col gap-4"
      >
        <h1 className="font-bold text-3xl">تنظیم رمز عبور</h1>
        <div className="flex flex-col w-full bg-white p-5 rounded-lg">
          <div className="flex justify-between items-center border-b">
            <input
              className="w-full outline-none p-2 font-Vazir text-lg"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type={!showpass ? "password" : "text"}
              name="password"
              id="password"
              placeholder="رمز عبور "
            />
            <button
              className="active:scale-90 transition-all"
              type="button"
              onClick={() => setShowPass((pre) => !pre)}
            >
              {!showpass ? <Show size={24} /> : <Hide size={24} />}
            </button>
          </div>
          <div className="flex justify-between items-center ">
            <input
              className="w-full outline-none p-2 font-Vazir text-lg"
              value={passConfirm}
              onChange={(e) => setPassConfirm(e.target.value)}
              type={!showpassConfirm ? "password" : "text"}
              name="password"
              id="passwordConfirm"
              placeholder="تکرار رمز عبور"
            />
            <button
              className="active:scale-90 transition-all"
              type="button"
              onClick={() => setShowPassConfirm((pre) => !pre)}
            >
              {!showpassConfirm ? <Show size={24} /> : <Hide size={24} />}
            </button>
          </div>
        </div>
        <button className="w-7/12 mx-auto text-center py-2 my-8 active:scale-95 transition-all hover:bg-[#1e858a] rounded text-white bg-[#1D9399] text-xl">
          تایید
        </button>
      </m.form>
      {validate ? (
        <m.p
          initial={{ scale: 0.2 }}
          animate={{ scale: 1 }}
          className="bg-green-100 font-Vazir rounded-lg py-2 px-5 text-green-500 border-b-4 border-green-500 my-2"
        >
          پسورد با موفقیت تغییر کرد
        </m.p>
      ) : null}
      {error ? (
        <m.p
          initial={{ scale: 0.2 }}
          animate={{ scale: 1 }}
          className="bg-red-100 font-Vazir rounded-lg py-2 px-5 text-red-500 border-b-4 border-red-500 my-2"
        >
          پسورد های وارد شده باید یکسان باشند
        </m.p>
      ) : null}
    </div>
  );
};

export default UpdatePassword;
