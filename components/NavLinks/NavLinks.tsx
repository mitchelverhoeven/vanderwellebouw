import Link from "next/link";
import React from "react";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

export default function NavLinks() {
  return (
    <div>
      <nav className="">
        <ul className="flex text-xl gap-4 tracking-wide">
          <SocialMediaLinks />

          <li className="hover:text-white duration-300">
            <Link href="/">Home</Link>
          </li>

          <li className="hover:text-white duration-300">
            <Link href="/werkenbij">Werken bij</Link>
          </li>

          <li className="hover:text-white duration-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
