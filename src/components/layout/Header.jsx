import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";

export default function Header() {
  return (
    <nav className="hidden glass-box-nav bg-black lg:h-[120px] xl:h-[90px] p-[20px] lg:px-[20px] px-[50px] lg:grid lg:grid-cols-3">
      <div className="flex gap-2 justify-start items-center">
        <img src={logo} alt="Logo" className="w-[50px] h-[50px]" />
        <div>
          <div className=" text-white font-bold">TENDERIX</div>
          <div className=" text-white lg:hidden xl:block">aktuální zakázková praxe</div>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <div className="glass-box-menu text-white text-lg bg-[#444444] px-3 py-1 rounded-lg">
          O nás
        </div>
        <div className="text-white text-lg">Ceník</div>
        <div className="text-white text-lg">Aktuálně</div>
        <div className="text-white text-lg">Kontakt</div>
      </div>
      <div className="flex gap-4 justify-end items-center">
        <div className="glass-box-login text-white bg-[#303030] px-3 py-1 rounded-lg text-lg border-2 border-[#949494]">Přihlásit</div>
        <div className="glass-box-register text-black bg-[#ffffff] px-3 py-1 rounded-lg text-lg border-2 border-[#767676]">Vyzkoušet zdarma</div>
      </div>
    </nav>
  );
}
