// import PageTransition from "@/components/PageTransition/PageTransition";
// import { forwardRef } from "react";
import Head from "next/head";

import Copyright from "@/components/Copyright/Copyright";
import SVGLaptopAnimation from "@/components/Home/SVGLaptopAnimation/SVGLaptopAnimation";
import WelcomeText from "@/components/Home/WelcomeText/WelcomeText";
import { Fade, Zoom } from "react-awesome-reveal";

// type HomePageProps = {};
// type HomePageRef = React.ForwardedRef<HTMLDivElement>;

// function HomePage(props: HomePageProps, ref: HomePageRef) {
export default function HomePage() {
  return (
    // <PageTransition ref={ref}>
    <>
      <Head>
        <title>
          Gericht op kwaliteit - Nieuwbouw | Verbouw | Aanbouw | Renovatie
        </title>
        <meta
          name="description"
          content="Dé bouwspecialist gericht op kwaliteit - Nieuwbouw, verbouw, aanbouw en renovatie."
        />
      </Head>

      <div className="bg-yellow-400">
      <Zoom damping={1} duration={2000}>
        <div className="HomePage">
          <div
            className="w-[1270px] h-auto mt-[100px] grid grid-cols-2 mx-auto items-center
          max-[1450px]:w-[1100px] max-[1450px]:mt-[50px] max-[1250px]:w-[1000px] 
          max-[1250px]:flex max-[1100px]:w-[850px] max-[950px]:w-full"
          >
            <div className="max-[950px]:hidden">
              <SVGLaptopAnimation />
            </div>
            <div className="">
              <WelcomeText />
            </div>
          </div>
        </div>
        <div className="mt-[200px] max-[1100px]:mt-[100px]">
          <Copyright />
        </div>
        </Zoom>
      </div>
      {/* // </PageTransition> */}
    </>
  );
}

// export default forwardRef(HomePage);
