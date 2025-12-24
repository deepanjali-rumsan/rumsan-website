import Navbar from "../navbar";
import Footer from "../footer";
import SectorsHero from "./hero/SectorsHero";
import SectorCard from "./sector-card/SectorCard";

export default function Sectors() {
  return (
    <div className="bg-white">
      <Navbar />
      <SectorsHero />
      <SectorCard />
      <Footer />
    </div>
  );
}

