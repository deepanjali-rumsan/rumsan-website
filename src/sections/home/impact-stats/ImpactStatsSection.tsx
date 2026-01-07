import Image from "next/image";
import { Folder, Globe, Users, Heart, GithubIcon } from "lucide-react";
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
