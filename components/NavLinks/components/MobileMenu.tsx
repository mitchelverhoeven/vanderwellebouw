import { useState } from "react";
import Link from "next/link";
import { HamburgerMenu } from "./HamburgerMenu";
import { useDisableScroll } from "./useDisableScroll";
import SocialMediaLinks from "@/components/SocialMediaLinks/SocialMediaLinks";

// Dit is navigatie menu op de kleinere schermen.
export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Als mobiel menu open staat zorgt dit ervoor als je op het kruisje klikt het menu dicht gaat.
  function close() {
    setOpen(false);
  }

  // Schakelt scrollen uit wanneer het mobiele menu wordt geopend.
  useDisableScroll(open);

  return (
    <>
      <div className="min-[951px]:hidden my-8 mr-14 z-50 max-[600px]:mr-10">
        <HamburgerMenu key="menu" open={open} onClick={setOpen} />
      </div>

      {open ? (
        <div
          className="mobile-menu fixed inset-x-0 top-0 z-40 h-screen bg-black text-white
          flex flex-col justify-center min-[951px]:hidden"
        >
          <nav
            className="font-bold min-[951px]:hidden text-center"
            onClick={close}
          >
            <ul className="text-xl leading-10">
              <li className="hover:text-yellow-400 duration-300">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-yellow-400 duration-300">
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <SocialMediaLinks />
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </>
  );
}
