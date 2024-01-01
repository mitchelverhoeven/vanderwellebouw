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
        Onze website is nog in aanbouw, het komende jaar gaan wij dan ook hard
        aan de slag. Onze gereedschappen liggen al klaar om de website met een
        fris nieuw design in elkaar te timmeren.
        <br />
        <br />
        Van der Welle Bouw (voorheen aannemersbedrijf van der Welle- van
        Drongelen) is een kleinschalig bouwbedrijf die zowel nieuwbouw, verbouw,
        aanbouw als renovatieprojecten verzorgt. Hierbij staat de klant centraal
        en staat kwaliteit hoog in het vaandel. U kunt dus voor alle
        bouwwerkzaamheden bij ons terecht en helpen u graag verder met het
        uitwerken van uw ideeën.
        <br />
        <br />
        Onze contactgegevens kunt u vinden op de website en u kunt ons ook
        volgen op Facebook en Instagram voor de laatste ontwikkelingen. Dus
        heeft u een vraag of wilt u een offerte opvragen, schroom dan niet om te
        bellen of mailen.
        <br />
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
