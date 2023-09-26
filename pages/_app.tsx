import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout/layout";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import Transition from "@/components/Transition/Transition";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.asPath;

  return (
    <>
      <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
        <Layout>
          <Transition />
          <Component key={pageKey} {...pageProps} />
        </Layout>
          </motion.div>
      </AnimatePresence>

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

      <CookieConsent
        location="bottom"
        buttonText="Oké, ik begrijp het"
        cookieName="CookieName"
        style={{ background: "black" }}
        buttonStyle={{
          color: "white",
          fontSize: "13px",
          background: "rgb(250 204 21)",
        }}
        expires={150}
        // enableDeclineButton
        // onDecline={() => {
        //   alert("nay!");
        // }}
      >
        Uw privacy nemen wij heel serieus, navigeer naar
        vanderwellebouw.nl/privacy om te lezen hoe wij met uw privacy gegevens
        om gaan.{" "}
        <span style={{ fontSize: "10px" }}>
          <Link className="hover:text-yellow-400" href="/privacy">
            &#8594; Of klik hier om naar de pagina te gaan
          </Link>
        </span>
      </CookieConsent>
    </>
  );
}
