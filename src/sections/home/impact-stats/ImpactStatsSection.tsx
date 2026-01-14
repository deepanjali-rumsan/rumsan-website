import { Container } from "@/components/ui/container";
import { ImpactStats } from "./impact-stats";

export default function ImpactStatsSection() {
  return (
    <section className="py-10">
      <Container>
        <ImpactStats />
      </Container>
    </section>
  );
}
