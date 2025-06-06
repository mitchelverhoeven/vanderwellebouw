import Head from "next/head";

import Copyright from "@/components/Copyright/Copyright";
import SVGLaptopAnimation from "@/components/Home/SVGLaptopAnimation/SVGLaptopAnimation";
import WelcomeText from "@/components/Home/WelcomeText/WelcomeText";
import { Zoom } from "react-awesome-reveal";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>
          Gericht op kwaliteit - Nieuwbouw | Verbouw | Aanbouw | Renovatie
        </title>
        <meta
          name="description"
          content="Van der Welle Bouw is een aannemersbedrijf in Ooltgensplaat (Zuid-Holland) en u kunt er terecht voor nieuwbouw, aanbouw, verbouw en renovatie."
        />
      </Head>

      <div className="bg-yellow-400">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 4 }}
        >
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
        </motion.div>
      </div>
    </>
  );
}
