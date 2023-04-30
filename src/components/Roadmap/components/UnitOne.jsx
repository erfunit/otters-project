import React from "react";

import pin from "../../../assets/pinEmoji.svg";
import bookandpen from "../../../assets/bookandpen.svg";

const UnitOne = () => {
  return (
    <div className="w-[70%] mt-16 flex flex-col mx-auto relative">
      <div
        className="w-full flex justify-end
      "
      >
        <div className="w-fit  px-5 py-3 border-4 rounded-lg border-[#FCA002]">
          UNIT ONE
        </div>
      </div>
      <div>
        <h1 className="flex items-center my-7 font-semibold text-xl text-white  justify-end">
          THE MAN - MADE ENVIRONMENT
          <img src={pin} className="w-7 mr-3 " alt="" />
        </h1>
      </div>
      <div className="bg-white rounded-lg border-dashed font-normal border p-5 border-black">
        <p className="font-Vazir text-lg my-5">
          سلام <br /> به مسیر یادگیری متوسط آیلتس خوش اومدید. <br />
          <br /> در این درس به کمک ده درسنامه و 50 ،تمرین با هم به یادگیری در
          مورد محیط های ساخته شده توسط بشر می پردازیم و به همین بهانه مهارتهای
          چهارگانه خودمون شامل : Reading writing , Listening, speaking رو تقویت
          می کنیم . <br />
          <br /> تو متن زیر میتونید اهداف یادگیری این درس رو مشاهده کنید. <br />
          <br /> نکته مهم <br />
          <br /> برای مطالعه دروس ابتدا منبع یک به علاوه جزوه یک ادر صورت وجود
          جزوه برای درس رو مطالعه کنید و بعد از مطالعه این موارد تمرین درس رو حل
          کنید. در صورتی که مشکلی در حل تمارین داشتید یا نیاز به تثبیت مطالب
          داشتید سراغ منبع دو یا جزوه دو برند، به علاوه بعضی سرفصل ها به درسنامه
          نیاز نداره و فقط تمرین داره که برای شما مشخص شده <br />
          <br /> موفق باشید
        </p>
        <div dir="ltr" className="font-normal">
          <p>IN THIS LESSON YOU WILL LEARN HOW TO:</p>
          <br />
          <p>Reading</p>
          <br />
          <ul className="list-disc">
            <li className="ml-8">
              skim a text quickly to understand the general idea
            </li>
            <li className="ml-8">
              scan a text for specific information to answer short-answer
              questions
            </li>
            <li className="ml-8">
              use skimming and scanning to locate the answer quickly
            </li>
            <li className="ml-8">understanding and produce paraphrasing</li>
            <li className="ml-8">
              use the present continuous and present simple. correctly
            </li>
          </ul>
          {/*  */}
          <br />
          <p>Writing</p>
          <br />
          <ul className="list-disc">
            <li className="ml-8">
              select key features of different types of graph, chart and table
              in order to describe them accurately
            </li>
            <li className="ml-8">
              use suitable verbs, adjectives and adverbs to describe trends in
              different ways.
            </li>
            <li className="ml-8">
              compare different graphs or information in the same graph and
              write a summery of the main features.
            </li>
          </ul>
          {/*  */}
          <br />
          <p>Listening</p>
          <br />
          <ul className="list-disc">
            <li className="ml-8">
              predict the type of information required for short-answer
              questions
            </li>
            <li className="ml-8">
              listen for specific information (e.g. complex numbers,
            </li>
            <li className="ml-8">
              difficult spelling and write it down correctly
            </li>
            <li className="ml-8">listen to understand context</li>
            <li className="ml-8">answer</li>
            <li className="ml-8">
              multiple choice questions correctly by eliminating distractors
            </li>
          </ul>
          {/*  */}
          <br />
          <p>Speaking</p>
          <br />
          <ul className="list-disc">
            <li className="ml-8">
              speak about various aspects of where you live for speaking Part 1
            </li>
            <li className="ml-8">
              respond to wh, would and Yes/No questionis about
            </li>
            <li className="ml-8">where you live</li>
            <li className="ml-8">
              prepare more information for common Speaking Part 1
            </li>
            <li className="ml-8">topics</li>
            <li className="ml-8">use syllable strees in words correctly</li>
          </ul>
        </div>
      </div>
      <div className="my-10">
        <h3 className="text-white my-4 text-xl font-semibold" dir="ltr">
          skim a text quickly to understand the general idea
        </h3>
        <div className="grid grid-cols-8 my-4 gap-5">
          <img src={bookandpen} className="col-span-1" alt="Reading" />
          <div className="bg-white col-span-7 font-Vazir flex items-center p-3 rounded-lg justify-between">
            <span>منبع یک</span>
            <div className="flex gap-3">
              <button className="px-14 rounded py-2 text-sm bg-[#FB9D00] text-white">
                انجام شد؟
              </button>
              <button className="px-14 rounded py-2 text-sm bg-[#1D9399] text-white">
                مشاهده
              </button>
              <div className="bg-[#D9D9D9] text-[#1D9399] py-2 px-5 rounded text-sm">
                {" "}
                6 دقیقه
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-8 my-4 gap-5">
          <img src={bookandpen} className="col-span-1" alt="Reading" />
          <div className="bg-white col-span-7 font-Vazir flex items-center p-3 rounded-lg justify-between">
            <span>منبع دو</span>
            <div className="flex gap-3">
              <button className="px-14 rounded py-2 text-sm bg-[#FB9D00] text-white">
                انجام شد؟
              </button>
              <button className="px-14 rounded py-2 text-sm bg-[#1D9399] text-white">
                مشاهده
              </button>
              <div className="bg-[#D9D9D9] text-[#1D9399] py-2 px-5 rounded text-sm">
                {" "}
                15 دقیقه
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitOne;
