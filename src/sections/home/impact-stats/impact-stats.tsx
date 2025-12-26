import { StatCard } from "./impact-card";
import { Folder, Globe, Users, Heart, Github } from "lucide-react";

export const ImpactStats = () => {
  return (
    <section className="py-20">
      <div>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-2">
            <span className="text-indigo-600">Turning Impact Into</span>
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-700">
            Measurable Change
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-6 items-end">
          {/* Projects Deployed */}
          <StatCard
            icon={<Folder className="w-12 h-12" strokeWidth={1.5} />}
            number="10"
            label="Projects Deployed"
            image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            height="259px"
          />

          {/* Countries Across Asia & Africa */}
          <StatCard
            icon={<Globe className="w-12 h-12" strokeWidth={1.5} />}
            number="45"
            label="Countries Across Asia & Africa"
            image="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80"
            height="307px"
          />

          {/* Lives Impacted */}
          <StatCard
            icon={<Users className="w-12 h-12" strokeWidth={1.5} />}
            number="1M+"
            label="Lives Impacted"
            image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
            height="355px"
            isHighlight={true}
          />

          {/* Hours Volunteers */}
          <StatCard
            icon={<Heart className="w-12 h-12" strokeWidth={1.5} />}
            number="200+"
            label="Hours Volunteers"
            image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80"
            height="307px"
          />

          {/* Github Commit */}
          <StatCard
            icon={<Github className="w-12 h-12" strokeWidth={1.5} />}
            number="45,000+"
            label="Github Commit"
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            height="259px"
          />
        </div>
      </div>
    </section>
  );
};
