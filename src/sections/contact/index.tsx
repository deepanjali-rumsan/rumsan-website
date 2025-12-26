import Navbar from "../navbar";
import Footer from "../footer";
import ContactHero from "./hero/ContactHero";
import ContactForm from "./contact-form/ContactForm";

export default function Contact() {
  return (
    <div className="bg-white">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </div>
  );
}


