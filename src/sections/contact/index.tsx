import Navbar from "../navbar";
import Footer from "../footer";
import ContactHero from "./hero/ContactHero";
import ContactForm from "./contact-form/ContactForm";
import ExploreOpportunitiesSection from "./explore-opportunities/ExploreOpportunitiesSection";

export default function Contact() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ExploreOpportunitiesSection />
      <Footer />
    </div>
  );
}
