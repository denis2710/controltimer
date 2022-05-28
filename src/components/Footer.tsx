import { ChartBar, Clock, GearSix, Play } from "phosphor-react";
import React from "react";

interface FootertParams {
  placeholder: string;
}

const Footer: React.FC<FootertParams> = ({ placeholder }) => {
  return (
    <div className="flex flex-col bottom-0 absolute w-full h-52 left-0 ">
      <div className="flex flex-col pl-6 pt-6 pr-6">
        <label className="text-sm text-slate-500">{placeholder}</label>
        <div className="flex  gap-2 ">
          <input
            className="flex-1 p-3 rounded-xl shadow-xl
            focus:outline-none
          "
            type="text"
            placeholder={placeholder}
          />
          <button>
            <div className="flex rounded-lg px-5 h-full items-center justify-center text-5xl font-bold p-1 text-white bg-gradient-to-r from-[#21D2FE] to-[#3253C8]">
              <Play size={28} weight="fill" />
            </div>
          </button>
        </div>
      </div>
      <div className=" p-6 h-40 text-slate-500 flex space-x-20 justify-center items-center">
        <div className="w-1/3 h-30 flex rounded-lg justify-center items-center ">
          <div className="flex justify-center items-center flex-col pb-4">
            <ChartBar size={32} weight="fill" />
            <div>Statics</div>
          </div>
        </div>

        <div className="w-1/3 h-30 flex rounded-lg justify-center items-center text-white bg-gradient-to-r from-[#21D2FE] to-[#3253C8]">
          <div className="flex justify-center items-center flex-col pb-4">
            <Clock size={32} weight="fill" />
            <div>Report</div>
          </div>
        </div>

        <div className="w-1/3 h-30 flex rounded-lg justify-center items-center ">
          <div className="flex justify-center items-center flex-col pb-4">
            <GearSix size={32} weight="fill" />
            <div>Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
