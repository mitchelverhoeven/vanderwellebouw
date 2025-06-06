import Head from "next/head";
// import PageTransition from "@/components/PageTransition/PageTransition";
// import { forwardRef } from "react";

import ContactForm from "@/components/Contact/ContactForm/ContactForm";
import ContactDetails from "@/components/Contact/ContactDetails/ContactDetails";
import Copyright from "@/components/Copyright/Copyright";
import { Zoom } from "react-awesome-reveal";
import { motion } from "framer-motion";

// type ContactPageProps = {};
// type ContactPageRef = React.ForwardedRef<HTMLDivElement>;

// function ContactPage(props: ContactPageProps, ref: ContactPageRef) {
export default function ContacPage() {
  return (
    // <PageTransition ref={ref}>
    <>
      <Head>
        <title>
          Contact - Wij staan klaar voor al je vragen en bouwplannen!{" "}
        </title>
        <meta
          name="description"
          content="Wij staan klaar voor al je vragen en bouwplannen!"
        />
      </Head>

      <div className="bg-yellow-400">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 4 }}
        >
          <div className="ContactPage">
            <ContactDetails />
            <ContactForm />

            <div className="mt-[100px] max-[1100px]:mt-[100px]">
              <Copyright />
            </div>
          </div>
        </motion.div>
      </div>

      {/* // </PageTransition> */}
    </>
  );
}

// export default forwardRef(ContactPage);
