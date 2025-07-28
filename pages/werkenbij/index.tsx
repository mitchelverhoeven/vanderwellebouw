// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Copyright from "@/components/Copyright/Copyright";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Zoom } from "react-awesome-reveal";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

export default function WerkenBijPage() {
  return (
    <>
      <Head>
        <title>Vacatures - Kom jij ons team versterken?</title>
        <meta name="description" content="Kom jij ons team versterken?" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 4 }}
      >
        <div
          className="w-[1270px] mx-auto block mb-10 max-[1450px]:w-[1100px] 
    max-[1250px]:w-[1000px] max-[1100px]:w-[850px] max-[950px]:w-full max-[950px]:px-10"
        >
          <h1 className="text-4xl bold pb-[100px] mt-10 uppercase text-center max-[700px]:pb-[50px]">
            Vacatures
          </h1>
          <div
            className="border-2 border-black p-14 items-center flex justify-between max-[700px]:px-6
          max-[535px]:flex-col max-[535px]:justify-center max-[535px]:py-6"
          >
            <p className="font-bold uppercase text-xl max-[340px]:text-lg">
              Ervaren timmerman
            </p>
            <Link href="/vacature-ervaren-timmerman">
              <button className="font-bold flex items-center max-[535px]:mt-6">
                Bekijk vacature{" "}
                <svg
                  className="ml-4"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </button>
            </Link>
          </div>
          <div className="mt-[100px] w-[600px] text-center mx-auto block max-[700px]:w-full">
            <p>
              Op dit moment geen (passende) vacature? Wij komen graag in contact
              met echte vakmensen en nodigen je dan ook graag uit voor een open
              sollicitatie..
            </p>
            <Link href="/contact">
              <button
                className="bold tracking-wide bg-black text-yellow-400 w-[200px] py-3 mx-auto 
          block mt-6 rounded-full hover:bg-white hover:text-black duration-300 max-[500px]:text-sm
          "
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-[250px] max-[1100px]:mt-[100px] max-[360px]:text-xs">
          <Copyright />
        </div>
      </motion.div>
    </>
  );
}
