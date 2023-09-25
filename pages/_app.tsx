import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout/layout";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.asPath;

  return (
    <>
    <AnimatePresence initial={false} mode="wait">
      <Layout>
        <Component key={pageKey} {...pageProps} />
      </Layout>
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
   </>
  );
}
