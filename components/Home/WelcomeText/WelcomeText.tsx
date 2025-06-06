import Link from "next/link";
import React from "react";
import SVGLaptopAnimation from "../SVGLaptopAnimation/SVGLaptopAnimation";

export default function WelcomeText() {
  return (
    <div className="text-center">
      <h2 className="text-3xl bold px-10 pb-10">
        <span className="text-lg">Website in ontwikkeling</span>
        <br />
        Net als jouw bouwplannen
      </h2>
      <div className="flex justify-center pb-10 min-[951px]:hidden">
        <SVGLaptopAnimation />
      </div>
      <p className="pl-10 pr-10">
        Tot die tijd blijven wij vooral doen waar we goed in zijn: bouwen met
        vakmanschap en oog voor detail.
        <br />
        <br />
        Van der Welle Bouw is een kleinschalig bouwbedrijf met een team dat veel
        ervaring heeft in nieuwbouw, verbouw, aanbouw en renovatie. Of je nu
        droomt van een nieuw huis, een uitbreiding wilt realiseren of een
        karakteristiek pand wilt renoveren: wij denken met je mee en zorgen dat
        alles soepel verloopt.
        <br />
        <br />
        Duidelijke communicatie en heldere afspraken zijn voor ons
        vanzelfsprekend. Wij leveren kwaliteit waar je op kunt vertrouwen en
        waar je trots op mag zijn.
        <br />
        <br />
        Heb je een bouwvraag of wil je je ideeën bespreken? We helpen je graag
        verder met persoonlijk advies en slimme oplossingen.
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
