import { useEffect, useState } from "react";

export default function Technologies() {
  return (
    <div className="h-full xl:h-[80vh] flex flex-col gap-14 justify-center items-center mb-40 xl:mb-0 md:px-[100px] xl:py-[80px] xl:px-[200px] mx-14 lg:mx-0">
      <h2 className="font-inter text-white font-semibold text-3xl align-center">
        Moderní technologie
      </h2>
      <div className="flex gap-10 flex-col lg:flex-row">
        <div className="flex-1 glass-box flex flex-col gap-2 font-inter bg-[#282828] rounded-md text-white text-lg p-5">
          <h3 className=" text-2xl font-semibold relative before:content-[''] before:block before:h-[125%] before:w-[2px] before:bg-purple-500 before:absolute before:left-[-12px]">
            LLM model
          </h3>
          <div>
            Tenderix využívá technologii{" "}
            <span className="font-bold">LLM modelu</span>
            , který kombinuje umělou inteligenci a strojové učení. <br /> Tento
            model odpovídá a poskytuje zdroje na základě sémantické shody mezi
            zadáním uživatele a rozsáhlou vektorovou znalostní bází.
          </div>
        </div>
        <div className="flex-1 glass-box flex flex-col gap-2 font-inter bg-[#282828] rounded-md text-white text-lg p-5">
          <h3 className=" text-2xl font-semibold relative before:content-[''] before:block before:h-[125%] before:w-[2px] before:bg-purple-500 before:absolute before:left-[-12px]">
            LLM model
          </h3>
          <div>
            Tenderix využívá technologii{" "}
            <span className="font-bold">LLM modelu</span>
            , který kombinuje umělou inteligenci a strojové učení. <br /> Tento
            model odpovídá a poskytuje zdroje na základě sémantické shody mezi
            zadáním uživatele a rozsáhlou vektorovou znalostní bází.
          </div>
        </div>
      </div>
    </div>
  );
}
