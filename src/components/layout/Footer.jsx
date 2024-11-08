import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo-full.png";
import instagram from "../../assets/social/instagram.png";
import youtube from "../../assets/social/youtube.png";
import linkedin from "../../assets/social/linkedin.png";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] border-t-2 border-[#444444] flex flex-col gap-10 lg:grid lg:grid-cols-7 lg:gap-2 p-10 lg:p-[40px] lg:px-[50px] lg:pb-[150px]">
      <div className="flex flex-col gap-8 col-span-2">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-[50px] h-[50px]" />
          <div className="font-inter text-white text-xl font-bold">
            TENDERIX
          </div>
        </div>
        <div className="flex items-center gap-6">
          <img src={instagram} alt="Instagram" className="h-[30px]" />
          <img src={youtube} alt="YouTube" className="h-[30px]" />
          <img src={linkedin} alt="LinkedIn" className="h-[30px]" />
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-start lg:items-center justify-around col-span-5">
        <div className="text-white flex flex-col lg:grid lg:grid-rows-7 gap-2 pt-3">
          <div className="font-bold text-xl lg:text-medium mb-2">Ostatní</div>
          <div className="hidden lg:block"></div>
          <div>Nápověda</div>
          <div>Podmínky užití aplikace</div>
          <div>Zasílání obchodních sdělení</div>
          <div>Obchodní podmínky</div>
          <div>Zásady ochrany osobních údajů</div>
        </div>
        <div className="text-white flex flex-col lg:grid lg:grid-rows-7 gap-2 pt-3">
          <div className="font-bold text-xl lg:text-medium mb-2">Ostatní</div>
          <div className="hidden lg:block"></div>
          <div>Nápověda</div>
          <div>Podmínky užití aplikace</div>
          <div>Zasílání obchodních sdělení</div>
          <div>Obchodní podmínky</div>
          <div>Zásady ochrany osobních údajů</div>
        </div>
        <div className="text-white flex flex-col lg:grid lg:grid-rows-7 gap-2 pt-3">
          <div className="font-bold text-xl lg:text-medium mb-2">Ostatní</div>
          <div className="hidden lg:block"></div>
          <div>Nápověda</div>
          <div>Podmínky užití aplikace</div>
          <div>Zasílání obchodních sdělení</div>
          <div>Obchodní podmínky</div>
          <div>Zásady ochrany osobních údajů</div>
        </div>
      </div>
    </footer>
  );
}
