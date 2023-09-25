import Link from "next/link";
import React from "react";

export default function ContactDetails() {
  return (
    <div className="text-center pb-14">
      <ul>
        <li>
          <h1 className="text-4xl uppercase bold py-10 max-[750px]:text-3xl
          max-[500px]:text-2xl">Contact</h1>
        </li>
        <li>Van der Welle Bouw</li>
        <li>Dorpsweg 15</li>
        <li>3257 LB Ooltgensplaat</li>
        <li>06 - 29 604 142</li>
        <li className="pb-6">info@vanderwellebouw.nl</li>
        <li>BTW NL --(binnenkort beschikbaar)</li>
        <li className="pb-6">Handelsregister 91292808</li>
        <li>
          <div className="hover:text-white duration-300">
            <Link href="/">Privacy verklaring</Link>
          </div>
        </li>
        <li>
          <div className="hover:text-white duration-300">
            <Link href="/algemenevoorwaarden">Algemene voorwaarden</Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
