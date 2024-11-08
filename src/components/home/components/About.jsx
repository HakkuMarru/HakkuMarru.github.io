import { useEffect, useState } from "react";

import answer from "../../../assets/steps/answer.png";
import dominikZlebek from "../../../assets/photos/dominik-zlebek.png";
import janMusil from "../../../assets/photos/jan-musil.png";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center lg:mx-[100px] xl:py-[100px] xl:px-[200px] mx-14 lg:mx-0 gap-12  mb-40 lg:mb-0">
      <h2 className="font-inter text-white font-semibold text-3xl align-center">
        O nás
      </h2>
      <div className="grid lg:grid-cols-2 xl:grid-rows-2 gap-10">
        <div className="glass-box p-5 flex flex-col xl:flex-row gap-5">
          <img
            src={dominikZlebek}
            alt="Dominik Zlebek"
            className="rounded-md w-[300px] lg:w-full object-cover"
          />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <div className="text-[#C6BFFF] text-xl lg:text-2xl">
                Ing. Dominik Žlebek, LL.M.
              </div>
              <div className="text-white text-lg lg:text-lg">
                specialista veřejných zakázek
              </div>
            </div>
            <div className="text-white lg:text-lg">
              Dominik Žlebek je absolventem Provozně ekonomické fakulty na České
              zemědělské univerzitě v Praze, kde vystudoval obor Podnikání a
              administrativa a získal akademický titul Ing. Již během studia se
              zaměřil na oblast veřejných zakázek v Technologické agentuře České
              republiky, kde profesně působil jako projektový manažer veřejných
              zakázek ve Výzkumu, vývoji a inovacích. Po škole se začal plně
              věnovat zadávání veřejných zakázek v městské společnosti
              Technologie hlavního města Prahy, a. s. a v současnosti působí v
              Praze jako konzultant veřejných zakázek. Nadto se věnuje
              vzdělávání a šíření dobrého povědomí o oblasti veřejných zakázek v
              rámci platformy „Veřejné zakázky 24“ a aplikace Tenderix - první
              umělé inteligence ve veřejných zakázkách.
            </div>
          </div>
        </div>
        <div className="glass-box p-5 flex flex-col xl:flex-row gap-5">
          <img
            src={dominikZlebek}
            alt="Dominik Zlebek"
            className="rounded-md w-[300px] lg:w-full object-cover"
          />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <div className="text-[#C6BFFF] text-xl lg:text-2xl">
                Ing. Dominik Žlebek, LL.M.
              </div>
              <div className="text-white text-lg lg:text-lg">
                specialista veřejných zakázek
              </div>
            </div>
            <div className="text-white lg:text-lg">
              Dominik Žlebek je absolventem Provozně ekonomické fakulty na České
              zemědělské univerzitě v Praze, kde vystudoval obor Podnikání a
              administrativa a získal akademický titul Ing. Již během studia se
              zaměřil na oblast veřejných zakázek v Technologické agentuře České
              republiky, kde profesně působil jako projektový manažer veřejných
              zakázek ve Výzkumu, vývoji a inovacích. Po škole se začal plně
              věnovat zadávání veřejných zakázek v městské společnosti
              Technologie hlavního města Prahy, a. s. a v současnosti působí v
              Praze jako konzultant veřejných zakázek. Nadto se věnuje
              vzdělávání a šíření dobrého povědomí o oblasti veřejných zakázek v
              rámci platformy „Veřejné zakázky 24“ a aplikace Tenderix - první
              umělé inteligence ve veřejných zakázkách.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
