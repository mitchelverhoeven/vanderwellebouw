import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout/layout";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import Transition from "@/components/Transition/Transition";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Script from "next/script";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.asPath;

  useEffect(() => {
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K8QRLL95"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.appendChild(noscript);
  }, []);

  return (
    <>
      <Script id="gtm-head" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K8QRLL95');
        `}
      </Script>

      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Layout>
            <Transition />
            <Component key={pageKey} {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>

      {/* Google Analytics */}
      <GoogleAnalytics trackPageViews />

      {/* Toast Notifications */}
      <ToastContainer
        position="bottom-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      {/* Cookie Consent */}
      <CookieConsent
        location="bottom"
        buttonText="Accepteren"
        cookieName="CookieName"
        style={{ background: "black" }}
        buttonStyle={{
          color: "black",
          fontSize: "16px",
          background: "rgb(250 204 21)",
          borderRadius: "5px",
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
        expires={150}
        enableDeclineButton
        declineButtonText="Weigeren"
        declineButtonStyle={{
          fontSize: "16px",
          color: "rgb(250 204 21)",
          background: "none",
          border: "2px solid rgb(250 204 21)",
          borderRadius: "5px",
          marginRight: "50px",
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingTop: "10px",
          paddingBottom: "10px",
          marginBottom: "40px",
          marginTop: "0px",
        }}
        onDecline={() => {
          alert("De cookies zijn nu succesvol uitgeschakeld");
        }}
        flipButtons
      >
        <div className="p-10 max-[700px]:p-0">
          <span className="bold">
            Deze website gebruikt cookies om je ervaring te verbeteren.
          </span>
          <br />
          <br />
          Wij gebruiken cookies om je ervaring op onze website te verbeteren en
          relevante content te tonen, en het websiteverkeer te analyseren. Door
          op &quot;Accepteren&quot; te klikken, ga je akkoord met het gebruik
          van alle cookies. Wil je meer weten? Bekijk ons&nbsp;
          <Link className="hover:text-yellow-400 underline" href="/privacy">
            Privacybeleid
          </Link>
          .
        </div>
      </CookieConsent>
    </>
  );
}
