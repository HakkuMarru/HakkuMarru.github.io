import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Resources from "./components/Resources";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Links from "./components/Links";
import Warning from "./components/Warning";



import Background from "../background/Background";

export default function Home() {
  return (
    <main className="bg-[rgba(0,0,0,0.4)] pb-40 md:pb-20 lg:pb-0">
      <Hero />
      <Steps />
      <Resources />
      <Technologies />
      <Background />
      <About />
      <Links />
      <Warning />
    </main>
  );
}
