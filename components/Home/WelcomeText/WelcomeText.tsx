import Link from "next/link";
import React from "react";
import SVGLaptopAnimation from "../SVGLaptopAnimation/SVGLaptopAnimation";

export default function WelcomeText() {
  return (
    <div className="text-center">
      <h2 className="title-welcome-text text-2xl bold pb-10 uppercase underline underline-offset-4">
        Under construction!
      </h2>
      <div className="flex justify-center pb-10 min-[951px]:hidden">
        <SVGLaptopAnimation />
      </div>
      <p className="max-[1250px]:pl-10 pr-10">
        Onze website is nog in aanbouw, en het komende jaar gaan we hard aan de
        slag. De gereedschappen liggen al klaar om de website met een fris,
        nieuw design in elkaar te timmeren.
        <br />
        <br />
        Van der Welle Bouw (voorheen aannemersbedrijf Van der Welle - Van
        Drongelen) is een kleinschalig bouwbedrijf dat zich bezighoudt met
        nieuwbouw, verbouw, aanbouw en renovatieprojecten. Jij staat als klant
        centraal, en kwaliteit staat bij ons voorop. Je kunt bij ons terecht
        voor alle bouwwerkzaamheden, en we helpen je graag verder met het
        uitwerken van je ideeën.
        <br />
        <br />
        Onze contactgegevens vind je op de website, en je kunt ons ook volgen op
        Facebook en Instagram voor de laatste ontwikkelingen. Heb je een vraag
        of wil je een offerte opvragen? Schroom dan niet om te bellen of te
        mailen.
        <br />
        <br />
        We staan voor je klaar!
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
