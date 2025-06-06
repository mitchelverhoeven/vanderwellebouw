import Copyright from "@/components/Copyright/Copyright";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { Zoom } from "react-awesome-reveal";

export default function ErvarenTimmermanPage() {
  return (
    <>
      <Head>
        <title>
          Ervaren timmerman gezocht - Ben jij de timmerman die wij zoeken?
        </title>
        <meta
          name="description"
          content="Ben jij de timmerman die wij zoeken?"
        />
      </Head>

      <div
        className="w-[1270px] mx-auto block mb-10 max-[1450px]:w-[1100px] 
        max-[1250px]:w-[1000px] max-[1100px]:w-[850px] max-[950px]:w-full max-[950px]:px-10 "
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 4 }}
        >
          <h1 className="text-4xl bold pb-14 mt-10 uppercase text-center">
            Vacature ervaren timmerman
          </h1>
          <h2 className="text-xl bold pb-4">
            Jij bent een vakman die houdt van écht bouwen.
          </h2>
          <p className="pb-4">
            Dat gevoel van trots als je na een dag hard werken kijkt naar wat je
            met je eigen handen hebt neergezet. Strak timmerwerk, perfecte
            afwerking — jouw handtekening in elk detail.
          </p>
          <p className="pb-4">
            En dan liefst géén standaard werk, maar projecten waar je écht voor
            wilt gaan. Van monumentale panden tot moderne aanbouwen, met
            eerlijke materialen en collega&#8217;s die net als jij staan voor
            vakwerk.
          </p>
          <p className="pb-6">
            Klinkt dat als jouw wereld? Dan ben je bij ons op je plek.
          </p>
          <h2 className="text-xl bold pb-4">Zo ziet je dag eruit</h2>
          <p className="pb-4">
            Je start de dag met koffie en een praatje op de zaak. Daarna
            verzamel je je materialen en vertrek je naar de plek waar vandaag
            jouw handen nodig zijn. Vandaag werk je aan een complete
            dakconstructie, morgen ben je bezig met een klassieke dakkapel of
            het vervangen en plaatsen van kozijnen. Je werkt zelfstandig waar
            het moet en schakelt soepel met je collega&#8217;s. Want bij Van der
            Welle Bouw doen we het samen — met vakmanschap én werkplezier.
          </p>
          <p className="pb-6">
            Aan het eind van de dag kijk je met een voldaan gevoel naar wat je
            hebt neergezet. En op vrijdag? Dan sluiten we samen af met een
            biertje, bitterballen en andere snacks.
          </p>
          <h2 className="text-xl bold pb-4">Wat jij meebrengt</h2>

          <div className="gap-2 grid">
            <p>- Aantoonbare ervaring als timmerman</p>
            <p>- Zelfstandigheid én teamgevoel</p>
            <p>- Oog voor detail en liefde voor kwaliteit</p>
            <p>- Rijbewijs B</p>
            <p>- Goede beheersing van de Nederlandse taal</p>
            <p className="pb-6">- De drive om jezelf te blijven ontwikkelen</p>
          </div>

          <h2 className="text-xl bold pb-4">Wat wij jou bieden</h2>
          <div className="gap-2 grid">
            <p>- Fulltime functie met uitzicht op een vast contract</p>
            <p>
              - Salaris tussen €2.800 &ndash; €3.500 bruto per maand
              (afhankelijk van ervaring, conform CAO Bouw & Infra)
            </p>
            <p>- Mooie, afwisselende projecten — geen massaproductie</p>
            <p>- Werken met degelijk gereedschap en topmaterialen</p>
            <p>- Klein, hecht team met korte lijnen en veel humor</p>
            <p>- Mogelijkheid om door te groeien en nieuwe dingen te leren</p>
            <p>- Veel ruimte voor eigen initiatief</p>
            <p>- Vrijdagmiddagborrel met snacks</p>
            <p>- Jaarlijks teamuitje — bijvoorbeeld naar de Efteling</p>
          </div>
          <p className="pt-4 pb-6">
            Bij Van der Welle Bouw werk je in een nuchtere en betrokken omgeving
            waar vakmanschap écht gewaardeerd wordt. We zijn een kleinschalig
            bouwbedrijf met grote liefde voor kwaliteit — én voor onze mensen.
          </p>
          <h2 className="text-xl bold pb-4">Klaar voor een nieuwe stap?</h2>

          <p className="pb-4">
            Wil jij werken aan projecten om trots op te zijn, in een team waar
            werkplezier net zo belangrijk is als kwaliteit?
          </p>
          <p className="pb-4">
            Stuur dan je motivatie en CV naar{" "}
            <span className="bold">info@vanderwellebouw.nl</span>
            <br />
            Of neem direct contact op met Koos van der Welle via
            <span className="bold"> 06-29604142</span>
          </p>

          <h3 className="italic bold pt-8">
            Gericht op kwaliteit. Gedreven door vakmanschap.
          </h3>
        </motion.div>
      </div>
      <div className="mt-[120px] max-[1100px]:mt-[100px]">
        <Copyright />
      </div>
    </>
  );
}
