import { useState, useEffect } from "react";
import Link from "next/link";

import NavLinks from "@/components/NavLinks/NavLinks";
import SVGLogo from "@/components/SVGLogo/SVGLogo";
import HeaderMobile from "@/components/NavLinks/components/HeaderMobile";

// font-['Poppins ExtraBold']
// text-[#fced1c] gele kleur logo vanderwellebouw
// font-['orbitron-bold']

export default function MainHeader() {
  return (
    <>
      <header className="bg-yellow-400 flex justify-center">
        <div
          className="w-[1270px] h-[100px] bg-green-40 flex items-center justify-between z-10
      max-[1450px]:w-[1100px] max-[1250px]:w-[1000px] max-[1100px]:w-[850px] max-[950px]:hidden"
        >
          <Link href="/">
            <SVGLogo />
          </Link>

          <NavLinks />

        </div>
      </header>

      {/* Header mobile menu */}
      <HeaderMobile />
      {/* Header mobile menu */}
    </>
  );
}
