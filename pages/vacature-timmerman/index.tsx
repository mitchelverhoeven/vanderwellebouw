import Copyright from "@/components/Copyright/Copyright";
import Head from "next/head";
import React from "react";
import { Zoom } from "react-awesome-reveal";

export default function ErvarenTimmermanPage() {
  return (
    <>
      <Head>
        <title>Ervaren timmerman gezocht - Ben jij de timmerman die wij zoeken?</title>
        <meta name="description" content="Ben jij de timmerman die wij zoeken?" />
      </Head>

      <Zoom damping={1} duration={2000}>
      <div
        className="w-[1270px] mx-auto block mb-10 max-[1450px]:w-[1100px] 
      max-[1250px]:w-[1000px] max-[1100px]:w-[850px] max-[950px]:w-full max-[950px]:px-10 "
      >
        <h1 className="text-4xl bold pb-14 mt-10 uppercase text-center">
          Vacature ervaren timmerman
        </h1>
        <p className="pb-4">
          {" "}
          Wij zijn een kleinschalig bouwbedrijf die kwaliteit hoog in het
          vaandel heeft staan. Bij ons komen alle bouwwerkzaamheden voor, denk
          hierbij aan nieuwbouw, verbouw, aanbouw tot aan renovatie.{" "}
        </p>
        <p className="pb-4">
          Vanaf 1 januari 2024 gaat het aannemersbedrijf van der Welle- van
          Drongelen verder onder de nieuwe naam Van der Welle Bouw.
        </p>
        <h2 className="bold">Functie:</h2>
        <p className="pb-4">
          Ter uitbreiding van ons kwalitatieve team zijn wij op zoek naar een:
        </p>
        <p className="pb-4 uppercase">Ervaren timmerman</p>
        <p className="pb-4">
          Ben jij op zoek naar een nieuwe uitdaging en wil je in een leuk jong
          team aan het werk? Wij zijn op zoek naar een ervaren en enthousiaste
          timmerman om samen met ons mooi vakkundig werk af te leveren.
        </p>
        <h2 className="bold">Wat wij zoeken:</h2>
        <p className="pb-4">
          Je bent verantwoordelijk voor de kwaliteit van je werk en zorgt ervoor
          dat alles netjes wordt opgeleverd. Je beschikt over vakkennis en
          ervaring en bent bereid om nieuwe kennis op te doen. Daarnaast is het
          belangrijk dat je:
        </p>
        <p>- Een aantal jaar ervaring hebt als timmerman;</p>
        <p>- Graag in teamverband werkt;</p>
        <p>- In het bezit bent van een geldig rijbewijs B;</p>
        <p className="pb-4">- De Nederlandse taal spreekt.</p>
        <h2 className="bold">Wat wij bieden:</h2>
        <p>- Een fulltime contract, met uitzicht op een vast contract;</p>
        <p>- Een uitstekend salaris, conform CAO Bouw & Infra;</p>
        <p>- Goede secundaire arbeidsvoorwaarden;</p>
        <p>- Uitdagend werk met veel afwisseling en uniek vakwerk;</p>
        <p>- Ruimte voor persoonlijke ontwikkeling;</p>
        <p className="pb-4">
          - Een gezellig team dat bereid is elkaar te helpen.
        </p>
        <p>
          Heb je interesse in deze functie en wil je de uitdaging aangaan? Dan
          ontvangen wij graag je motivatie en CV en wie weet zitten wij
          binnenkort met jou om tafel! Voor vragen kun je contact opnemen met
          Koos van der Welle op telefoonnummer 06-29604142 of stuur een mail
          naar info@vanderwellebouw.nl.
        </p>
      </div>
      <div className="mt-[120px] max-[1100px]:mt-[100px]">
        <Copyright />
      </div>
      </Zoom>
    </>
  );
}
