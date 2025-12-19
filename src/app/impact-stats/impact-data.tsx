import { Folder, Globe, Users, Heart, Github } from "lucide-react";
import type { StatCardProps } from "./impact-card";

export const statsData: StatCardProps[] = [
  {
    icon: <Folder className="w-12 h-12" strokeWidth={1.5} />,
    number: "10",
    label: "Projects Deployed",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    height: "259px",
  },
  {
    icon: <Globe className="w-12 h-12" strokeWidth={1.5} />,
    number: "45",
    label: "Countries Across Asia & Africa",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
    height: "307px",
  },
  {
    icon: <Users className="w-12 h-12" strokeWidth={1.5} />,
    number: "1M+",
    label: "Lives Impacted",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    height: "355px",
    isHighlight: true, // ⭐ gradient card
  },
  {
    icon: <Heart className="w-12 h-12" strokeWidth={1.5} />,
    number: "200+",
    label: "Hours Volunteers",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
    height: "307px",
  },
  {
    icon: <Github className="w-12 h-12" strokeWidth={1.5} />,
    number: "45,000+",
    label: "Github Commit",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    height: "259px",
  },
];