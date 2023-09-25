import SVGLogo from '@/components/SVGLogo/SVGLogo';
import React, { useEffect, useState } from 'react'
import MobileMenu from './MobileMenu';

export default function HeaderMobile() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });


  return (
    <header
        id="scroll"
        className={`sticky flex items-center justify-between h-24 z-50 bg-white
        shadow-lg min-[951px]:hidden w-full ${visible ? "top-0" : ""}`}
      >
        <SVGLogo />

        <MobileMenu />

      </header>
  )
}
