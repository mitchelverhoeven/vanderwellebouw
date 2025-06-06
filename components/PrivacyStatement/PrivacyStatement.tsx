import { motion } from "framer-motion";
import React from "react";
import { Zoom } from "react-awesome-reveal";

export default function PrivacyStatement() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 4 }}
      >
        <h2 className="mb-6 text-2xl bold max-[600px]:mt-12 text-center mt-16 uppercase">
          Privacyverklaring
        </h2>
        <h2 className="bold text-xl mb-2 mt-10">
          Privacy- en cookieverklaring Van der Welle Bouw B.V.
        </h2>

        <h2 className="bold text-xl mb-2">Ingangsdatum: 15 september 2023</h2>

        <p className="my-6">
          Jouw privacy is voor Van der Welle Bouw B.V. van groot belang. Wij
          houden ons dan ook aan de relevante wet- en regelgeving over privacy,
          waaronder de Algemene Verordening Gegevensbescherming (verder: AVG).
          Dit betekent dat wij:
        </p>
        <p>
          - <b>Onze doeleinden duidelijk vastleggen,</b> voordat wij jouw
          persoonlijke gegevens verwerken, via deze privacyverklaring;
        </p>
        <p>
          - <b>Zo min mogelijk persoonlijke gegevens opslaan</b> en enkel de
          gegevens die nodig zijn voor onze doeleinden;
        </p>
        <p>
          - <b>Expliciet toestemming vragen</b> voor de verwerking van jouw
          persoonlijke gegevens, mocht toestemming verplicht zijn;
        </p>
        <p>
          - <b>Benodigde beveiligingsmaatregelen treffen</b> om jouw
          persoonlijke gegevens te beschermen. Wij leggen deze verplichtingen
          ook op aan partijen die persoonsgegevens voor ons verwerken;
        </p>
        <p>
          - <b>Jouw rechten respecteren,</b> zoals het recht op inzage,
          correctie of verwijdering van jouw bij ons verwerkte persoonsgegevens.
        </p>
        <p className="my-4">
          Jouw gegevens zijn veilig bij ons en wij zullen deze gegevens altijd
          netjes gebruiken. In deze privacyverklaring leggen we uit wat wij bij
          de website www.vanderwellebouw.nl allemaal doen met de informatie die
          wij over jou te weten komen.
        </p>
        <p className="mb-6">
          Als je vragen hebt of wilt weten wat wij precies van jou bijhouden,
          neem dan contact op met Van der Welle Bouw B.V.
        </p>
        <h2 className="bold text-xl my-2">Contactformulier</h2>
        <p>
          Met het contactformulier kun je ons vragen stellen of aanvragen doen.
          Hiervoor gebruiken wij jouw:
        </p>
        <p className="mt-4">- IP-adres;</p>
        <p>- Factuuradres;</p>
        <p>- E-mailadres;</p>
        <p>- Telefoonnummer;</p>
        <p>- Betalingsgegevens;</p>
        <p>- NAW-gegevens.</p>
        <p className="mt-4 mb-6">
          Dit doen wij op basis van jouw toestemming. Wij bewaren deze
          informatie totdat we zeker weten dat je tevreden bent met onze reactie
          en drie maanden daarna. Zo kunnen we bij vervolgvragen de informatie
          er makkelijk bij pakken. Ook kunnen we zo onze klantenservice trainen
          om nog beter te worden.
        </p>
        <h2 className="bold text-xl my-2">Statistieken en profilering</h2>
        <p>
          Wij houden statistieken bij over het gebruik van onze website, maar
          dit gebeurt te allen tijde geanonimiseerd. Met deze statistieken
          verbeteren wij onze website om zo bijvoorbeeld alleen nog relevante
          informatie te laten zien. Wij kunnen jouw persoonsgegevens met elkaar
          combineren om meer over jou te weten te komen. Uiteraard zullen wij
          jouw privacy te allen tijde respecteren. Wil je dit niet, dan kun je
          dit altijd aan ons melden. Hiervoor gebruiken wij jouw:
        </p>
        <p className="mt-4">- Telefoonnummer;</p>
        <p>- Factuuradres;</p>
        <p>- E-mailadres;</p>
        <p>- Betalingsgegevens;</p>
        <p>- NAW-gegevens;</p>
        <p>- IP-adres.</p>
        <p className="mt-4 mb-6">
          Dit doen wij op basis van jouw toestemming. Wij bewaren deze
          informatie voor zes weken.
        </p>

        <h2 className="bold text-xl my-2">Reclame</h2>
        <p>
          Wij willen jou graag reclame sturen over aanbiedingen en nieuwe
          producten of diensten. Dit doen wij:
        </p>
        <p>- Per post;</p>
        <p>- Per e-mail;</p>
        <p>- Via social media;</p>
        <p>- Per telefoon.</p>

        <p className="my-4">
          Je kunt op ieder moment bezwaar maken tegen deze reclame. In elke
          brief staat hoe dat moet. Elke e-mail bevat een afmeldlink. Je kunt
          ons blokkeren of de afmeldoptie gebruiken. Je kunt dit aangeven als je
          wordt gebeld.
        </p>

        <h2 className="font-bold text-xl my-2">
          Verstrekking aan andere bedrijven of instellingen
        </h2>
        <p className="mb-6">
          Met uitzondering van de partijen die nodig zijn om de hierboven
          genoemde diensten te leveren, geven wij jouw persoonsgegevens onder
          geen voorwaarde aan andere bedrijven of instellingen, behalve als wij
          dat wettelijk verplicht zijn (bijvoorbeeld als de politie dat eist bij
          een vermoeden van een misdrijf).
        </p>
        <h2 className="bold text-xl my-2">Statistieken</h2>
        <p className="mb-4">
          Wij houden statistieken bij over het gebruik van onze website, maar
          deze gegevens zijn altijd geanonimiseerd.
        </p>
        <p className="mb-6">
          In onze website zijn social media buttons opgenomen. Hiermee
          verzamelen de beheerders van deze diensten jouw persoonsgegevens.
        </p>
        <h2 className="bold text-xl my-2">Cookies</h2>
        <p className="mb-4">
          Onze website gebruikt cookies. Cookies zijn kleine bestandjes waar we
          informatie in kunnen opslaan, zodat je die niet steeds hoeft in te
          vullen. Maar wij kunnen er ook mee zien dat je ons weer bezoekt.
        </p>
        <p className="mb-6">
          Je kunt via jouw browser het plaatsen van cookies uitschakelen, maar
          sommige dingen op onze website werken dan niet goed meer.
        </p>
        <h2 className="bold text-xl my-2">
          Wijzigingen in deze privacyverklaring
        </h2>
        <p className="mb-6">
          Wanneer onze website wijzigt, moeten wij natuurlijk ook de
          privacyverklaring aanpassen. Let dus altijd op de datum hierboven en
          kijk regelmatig of er nieuwe versies zijn. Wij zullen ons best doen
          wijzigingen aan jou door te geven.
        </p>
        <h2 className="bold text-xl my-2">Jouw rechten</h2>
        <p>
          Als je vragen hebt of wilt weten welke persoonsgegevens wij van jou
          hebben, kun je altijd contact met ons opnemen. Zie de contactgegevens
          hieronder.
        </p>
        <p className="my-4">Je hebt de volgende rechten:</p>
        <p>
          - Uitleg krijgen over welke persoonsgegevens wij hebben en wat wij
          daarmee doen;
        </p>
        <p>- Inzage in de precieze persoonsgegevens die wij hebben;</p>
        <p>- Het laten corrigeren van fouten;</p>
        <p>- Het laten verwijderen van verouderde persoonsgegevens;</p>
        <p>
          - Het laten overdragen van persoonsgegevens aan een andere partij;
        </p>
        <p>- Intrekken van toestemming;</p>
        <p>- Een bepaalde verwerking beperken;</p>
        <p>- Bezwaar maken tegen een bepaald gebruik.</p>
        <p className="my-4">
          Let op dat je altijd duidelijk aangeeft wie je bent, zodat we zeker
          weten dat wij geen gegevens van de verkeerde persoon aanpassen of
          verwijderen.
        </p>
        <p className="mb-6">
          Wij zullen in principe binnen een maand aan jouw verzoek voldoen. Deze
          termijn kan echter worden verlengd om redenen die verband houden met
          de specifieke rechten van betrokkenen of de complexiteit van het
          verzoek. Als wij deze termijn verlengen, zullen wij jou daarvan tijdig
          op de hoogte stellen.
        </p>
        <h2 className="bold text-xl my-2">Klacht indienen</h2>
        <p>
          Als je een klacht in wilt dienen over het gebruik van jouw
          persoonsgegevens, kun je een e-mail sturen naar
          info@vanderwellebouw.nl. Wij pakken elke klacht intern op en
          communiceren dit verder met jou.
        </p>
        <p className="mt-4 mb-6">
          Als je vindt dat wij jou niet op de juiste manier helpen, dan heb je
          het recht om een klacht in te dienen bij de toezichthouder. Deze heet
          de Autoriteit Persoonsgegevens.
        </p>
        <h2 className="bold text-xl my-2">Contactgegevens</h2>
        <p>Van der Welle Bouw B.V</p>
        <p>Dorpsweg 15</p>
        <p>3257 LB Ooltgensplaat</p>
        <p>E-mailadres: info@vanderwellebouw.nl</p>
        <p>Telefoon: 06-29604142</p>
        <p className="mt-4">KvK nummer: 91292808</p>
      </motion.div>
    </>
  );
}
