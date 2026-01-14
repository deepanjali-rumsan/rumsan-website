import PortfolioHero from "./hero/PortfolioHero";
import PortfolioSearch from "./search/PortfolioSearch";
import ProjectsGrid from "./projects-grid/ProjectsGrid";
import Navbar from "../navbar";
import Footer from "../footer";

export default function PortfolioSections() {
  return (
    <>
      <Navbar />
      <PortfolioHero />
      <PortfolioSearch />
      <ProjectsGrid />
      <Footer   />
    </>
  );
}
