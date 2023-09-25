import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// sendgrid.js (in api map) en .env.local file (keycode) zijn benodigd bij dit contactformulier.

export default function ContactForm() {
  // States for contact form fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    // if (tel.length <= 0) {
    //   tempErrors["tel"] = true;
    //   isValid = false;
    // }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    // console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          tel: tel,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        toast.error("Verzenden is niet gelukt", error);
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      toast.success("Succesvol verzonden");
      setFullname("");
      setEmail("");
      setTel("");
      setSubject("");
      setMessage("");
    }
    console.log(fullname, email, tel, subject, message);
  };

  return (
    <div
      className="mx-auto block w-[1270px] max-[1450px]:w-[1100px] max-[1250px]:w-[1000px] 
      max-[1100px]:w-[850px] max-[950px]:w-full"
    >
      <form onSubmit={handleSubmit} className="flex flex-col px-8 py-8">
        <h1 className="text-4xl bold pb-4 text-center max-[750px]:text-3xl
        max-[500px]:text-2xl max-[355px]:text-xl">
          Verstuur hier uw bericht
        </h1>

        <label htmlFor="naam" className="font-bold">
          Naam
        </label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          name="fullname"
          placeholder="Vul hier uw voor- en achternaam in"
          id="naam"
          required
          className="bg-white border-b py-2 pl-4 focus:outline-none rounded-md focus:ring-2 
          ring-black font-light text-gray-500 max-[500px]:text-sm"
        />

        <label htmlFor="email" className="mt-4 bold">
          E-mailadres
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Vul hier uw e-mailadres in"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="bg-white border-b py-2 pl-4 focus:outline-none rounded-md focus:ring-2 
          ring-black font-light text-gray-500 max-[500px]:text-sm"
        />

        <label htmlFor="tel" className="mt-4 bold">
          Telefoonnummer *
        </label>
        <input
          type="tel"
          name="tel"
          id="tel"
          placeholder="Vul hier uw telefoonnummer in"
          value={tel}
          onChange={(e) => {
            setTel(e.target.value);
          }}
          className="bg-white border-b py-2 pl-4 focus:outline-none rounded-md focus:ring-2 
          ring-black font-light text-gray-500 max-[500px]:text-sm"
        />

        <label htmlFor="subject" className="mt-4 bold">
          Onderwerp
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Vul hier het onderwerp in"
          required
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          className="bg-white border-b py-2 pl-4 focus:outline-none rounded-md focus:ring-2 
          ring-black font-light text-gray-500 max-[500px]:text-sm"
        />

        <label htmlFor="message" className="mt-4 bold">
          Bericht
        </label>
        <textarea
          name="message"
          id="message"
          required
          placeholder="Type hier uw bericht...."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="h-60 bg-white border-b py-2 pl-4 focus:outline-none rounded-md focus:ring-2 
          ring-black font-light text-gray-500 max-[500px]:text-sm"
        ></textarea>

        <div className="text-xs pt-4">
          <p>Met * gemarkeerde velden zijn geen verplichte velden.</p>
        </div>

        <div className="flex flex-row items-center justify-start">
          <button
            type="submit"
            className="px-10 mt-6 py-2 bg-black text-yellow-400 hover:text-white duration-300 
            bold rounded-full text-lg flex flex-row items-center"
          >
            Verzenden
          </button>
        </div>
      </form>
    </div>
  );
}

function handleValidation() {
  throw new Error("Function not implemented.");
}