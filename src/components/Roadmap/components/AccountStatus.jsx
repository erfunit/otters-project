import React from "react";

import { BsArrowLeftShort } from "react-icons/bs";

const AccountStatus = () => {
  return (
    <div className="w-[70%] bg-white rounded-lg flex justify-between items-center p-6 font-Vazir  mx-auto mb-7 text-xl">
      <p className="text-2xl font-semibold">وضعیت اشتراک: رایگان (فریمیوم)</p>
      <button className="text-[#17CF13] relative active:scale-95 group flex justify-center items-center duration-100 border-2 px-28 py-3 rounded border-[#17CF13] hover:bg-[#17CF13] hover:text-white transition-all">
        ارتقاء اشتراک
        <div className="overflow-hidden w-0 group-hover:w-auto absolute transition-all opacity-60 left-20 group-hover:left-16">
          <BsArrowLeftShort className="text-white" size={30} />
        </div>
      </button>
    </div>
  );
};

export default AccountStatus;
