import React from "react";

import { motion as m } from "framer-motion";

const Heading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className=" w-[106vw] h-[106vw] mr-[6vw] absolute top-[-65%] mt-[-10%] bg-[#FB9D00] shadow-md rounded-full"></div>
      <div className=" w-[106vw] h-[106vw] mr-[-3vw] absolute top-[-60%] mt-[-10%] bg-[#ffffff] shadow-md rounded-full"></div>
      <div
        className=" w-[106vw] h-[106vw] mr-[-3vw] absolute top-[-70%] mt-[-10%] bg-gradient-to-br from-[#FFFFFF] to-[#1C9399] shadow-md rounded-full"
        fl
      ></div>
      <m.div
        initial={{ opacity: 0, top: -140 }}
        animate={{ opacity: 1, top: -150 }}
        transition={{ duration: 0.4 }}
        className="z-20 relative top-[-150px]"
      >
        <h1 className="font-Vazir text-center font-bold text-[#3A3A3A] text-6xl leading-snug">
          نقشه راه یادگیری
          <br />
          مهارت آیلتس
        </h1>
        <hr className="border-none h-2 w-full bg-[#CECECE] my-5 " />
        <h2 className="font-Vazir text-center font-bold leading-snug text-6xl text-[#00109E]">
          سطح: متوسط
          <br />
          تیپ3متوسط ، ج (C33)
        </h2>
      </m.div>
    </div>
  );
};

export default Heading;
