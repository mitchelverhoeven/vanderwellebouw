import Copyright from "@/components/Copyright/Copyright";
import Head from "next/head";
import Link from "next/link";
import { Zoom } from "react-awesome-reveal";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Oeps, helaas kon de pagina niet gevonden worden !</title>
        <meta
          name="description"
          content="Oeps, helaas kon de pagina niet gevonden worden! || 404 error page"
        />
      </Head>

      <Zoom damping={1} duration={2000}>
        <div
          className="w-[1270px] mx-auto block max-[1450px]:w-[1100px] max-[1250px]:w-[1000px] 
    max-[1100px]:w-[850px] max-[950px]:w-full"
        >
          <div className="justify-center items-center grid">
            <div
              className="grid mt-[200px] text-center w-[600px] max-[950px]:w-full max-[950px]:px-10
        max-[400px]:mt-[100px]"
            >
              <h1
                className="text-4xl bold uppercase pb-8 text-white underline 
            underline-offset-4"
              >
                404 error
              </h1>
              <h2 className="text-2xl bold uppercase pb-2 max-[500px]:text-xl">
                Oeps, er is iets verkeerd gegaan!
              </h2>
              <p>
                Helaas kon de pagina niet gevonden worden. Dit is een tijdelijke
                website daarom is de kans heel groot dat de betreffende pagina
                niet bestaat. Het komende jaar zijn wij dan ook hard bezig om de
                website met een fris nieuw design in elkaar te timmeren..
              </p>

              <Link href="/">
                <button
                  className="bold tracking-wide bg-black text-yellow-400 w-[350px] py-3 mx-auto 
          block mt-6 rounded-full hover:bg-white hover:text-black duration-300 max-[500px]:text-sm
          max-[500px]:w-[280px] max-[375px]:w-full"
                >
                  Ga terug naar de homepage
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-[300px] max-[1100px]:mt-[170px]">
            <Copyright />
          </div>
        </div>
      </Zoom>
    </>
  );
}
