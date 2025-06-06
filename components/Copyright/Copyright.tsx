import Link from "next/link";
import React from "react";

export default function Copyright() {
  return (
    <div
      className="justify-center w-[1270px] mx-auto block mb-10 font-bold text-sm
    max-[1450px]:w-[1100px] max-[1250px]:w-[1000px] max-[1100px]:w-[850px] max-[900px]:w-full"
    >
      <div className="flex justify-center">
        <ul className="flex items-center gap-2 max-[950px]:flex-col">
          <li>
            <Link href="/">
              <div className="hover:text-white duration-300">
                &copy; 2023 van der Welle Bouw
              </div>
            </Link>
          </li>
          <span className="text-white max-[950px]:hidden">|</span>
          <li>
            <Link href="https://www.burocreatixx.nl" target="blank">
              <div className="hover:text-white duration-300">
                Website design: Buro Creatixx
              </div>
            </Link>
          </li>
          <span className="text-white max-[950px]:hidden">|</span>
          <li>
            <Link href="/privacy">
              <div className="hover:text-white duration-300">
                Privacy verklaring
              </div>
            </Link>
          </li>
          <span className="text-white max-[950px]:hidden">|</span>
          <li>
            <Link href="/algemenevoorwaarden">
              <div className="hover:text-white duration-300">
                Algemene voorwaarden
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
