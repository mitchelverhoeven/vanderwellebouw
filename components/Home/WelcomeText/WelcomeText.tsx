import Link from "next/link";
import React from "react";
import SVGLaptopAnimation from "../SVGLaptopAnimation/SVGLaptopAnimation";

export default function WelcomeText() {
  return (
    <div className="text-center">
      <h2 className="title-welcome-text text-2xl bold pb-10 uppercase underline underline-offset-4">
        Under construction! Will be ready soon.
      </h2>
      <div className="flex justify-center pb-10 min-[951px]:hidden">
      <SVGLaptopAnimation/>
      </div>
      <p className="max-[1250px]:pl-10 pr-10">
        Onze website is nog in aanbouw, het komende jaar gaan wij dan ook hard
        aan de slag. Onze gereedschappen liggen al klaar om de website met een
        fris nieuw design in elkaar te timmeren.
        <br />
        <br />
        Verder zijn we er helemaal klaar voor om vanaf januari 2024 door te gaan
        met het aannemersbedrijf van der Welle- van Drongelen, onder de nieuwe
        naam “Van der Welle Bouw”. <br />
        <br />
        Onze contactgegevens kunt u al wel vinden op de website, u kunt ons ook
        volgen op Facebook en Instagram voor de laatste ontwikkelingen. Dus
        heeft u een vraag of wilt u een offerte opvragen, schroom dan niet om te
        bellen of mailen. <br />
        <br />
        Wij staan voor u klaar!
      </p>
      <Link href="/contact">
        <button
          className="bold tracking-wide bg-black text-yellow-400 w-52 py-3 mx-auto 
          block mt-6 rounded-full hover:bg-white hover:text-black duration-300"
        >
          Contact
        </button>
      </Link>
    </div>
  );
}
