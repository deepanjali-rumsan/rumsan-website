import Navbar from "../navbar";
import Footer from "../footer";
import ServicesHero from "./hero/ServicesHero";
import ServiceCard from "./service-card/ServiceCard";

export default function Services() {
  return (
    <div className="bg-white">
      <Navbar />
      <ServicesHero />
      <ServiceCard />
      <Footer />
    </div>
  );
}

