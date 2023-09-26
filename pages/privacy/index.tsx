import Copyright from "@/components/Copyright/Copyright";
import PrivacyStatement from "@/components/PrivacyStatement/PrivacyStatement";
import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacyverklaring</title>
        <meta
          name="description"
          content="Alles in het belang van uw privacy!"
        />
      </Head>
      
    <div
      className="w-[1270px] mx-auto block mb-10 max-[1450px]:w-[1100px] 
      max-[1250px]:w-[1000px] max-[1100px]:w-[850px] max-[950px]:w-full max-[950px]:px-10 "
    >
      <PrivacyStatement />

      <div className="mt-[100px] max-[1100px]:mt-[100px]">
      <Copyright />
      </div>
    </div>
    </>
  );
}
