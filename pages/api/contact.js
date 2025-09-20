// import sendgrid from "@sendgrid/mail";

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// async function sendEmail(req, res) {
//   try {
//     await sendgrid.send({
//       to: "info@vanderwellebouw.nl",
//       from: "info@vanderwellebouw.nl",
//       subject: `${req.body.subject}`,
//       html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
//       <html lang="nl">
//       <head>
//         <meta charset="utf-8">

//         <title>The HTML5 Herald</title>
//         <meta name="description" content="The HTML5 Herald">
//         <meta name="author" content="SitePoint">
//       <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

//         <link rel="stylesheet" href="css/styles.css?v=1.0">

//       </head>

//       <body>
//         <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
//               </div>
//               <div class="container" style="margin-left: 20px;margin-right: 20px;">
//               <h3>- Je hebt een nieuwe e-mail van : <span style="color:red;"> ${req.body.fullname}</span> </h3>
//               <h3>- E-mail van verzender : <span style="color:red;"> ${req.body.email}</span></h3>
//               <h3>- Telefoonnummer van verzender : <span style="color:red;"> ${req.body.tel}</span></h3>
//               <div style="font-size: 16px;">
//               <p style="font-weight: bold;">Bericht:</p>
//               <p>${req.body.message}</p>
//               <br>
//               </div>
//               </div>
//       </body>
//       </html>`,
//     });
//   } catch (error) {
//     // console.log(error);
//     return res.status(error.statusCode || 500).json({ error: error.message });
//   }

//   return res.status(200).json({ error: "" });
// }

// export default sendEmail;

import nodemailer from "nodemailer";

// eenvoudige in-memory rate limiter (reset na interval). Niet persistent — ok voor kleine sites.
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minuut
const RATE_LIMIT_MAX = 6; // max 6 requests per IP per window...
const ipMap = new Map();

function clean(input = "") {
  // basic sanitization: strip CRLF en < > om header injection te verminderen
  return String(input)
    .replace(/(\r|\n|<|>)/g, "")
    .trim();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip =
    req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";

  // rate limit
  const now = Date.now();
  const entry = ipMap.get(ip) || { count: 0, start: now };
  if (now - entry.start > RATE_LIMIT_WINDOW_MS) {
    entry.count = 0;
    entry.start = now;
  }
  entry.count += 1;
  ipMap.set(ip, entry);
  if (entry.count > RATE_LIMIT_MAX) {
    return res
      .status(429)
      .json({ error: "Te veel verzoeken, probeer het later nogmaals." });
  }

  try {
    const { fullname, email, tel, subject, message } = req.body || {};

    // honeypot check
    // if (honeypot) {
    //   // silently accept but don't send — helps defeat bots
    //   return res.status(200).json({ success: true });
    // }

    // basic validation
    if (!fullname || !email || !subject || !message) {
      return res.status(400).json({ error: "Vul alle verplichte velden in." });
    }

    // sanitize inputs
    const sFullname = clean(fullname);
    const sEmail = clean(email);
    const sTel = clean(tel || "");
    const sSubject = clean(subject);
    const sMessage = clean(message).replace(/\n/g, "<br/>");

    // configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // optional: verify transporter (can be heavy; skip in production)
    // await transporter.verify();

    const mailOptions = {
      from: `"${sFullname}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      replyTo: sEmail,
      subject: sSubject || "Nieuw bericht via contactformulier",
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #222;">
          <h3>Nieuw bericht via contactformulier</h3>
          <p><strong>Naam:</strong> ${sFullname}</p>
          <p><strong>Email:</strong> ${sEmail}</p>
          <p><strong>Telefoon:</strong> ${sTel}</p>
          <p><strong>Onderwerp:</strong> ${sSubject}</p>
          <p><strong>Bericht:</strong><br/>${sMessage}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    const message = err?.message || "Versturen mislukt";
    return res.status(500).json({ error: message });
  }
}
