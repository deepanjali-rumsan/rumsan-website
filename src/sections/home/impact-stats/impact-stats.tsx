import { StatCard } from "./impact-card";
import { Folder, Globe, Users, Heart, Github } from "lucide-react";

export const ImpactStats = () => {
  return (
    <section>
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
            image="https://assets.rumsan.net/rahat/projects.jpg"
            height="259px"
          />

          {/* Countries Across Asia & Africa */}
          <StatCard
            icon={<Globe className="w-12 h-12" strokeWidth={1.5} />}
            number="45"
            label="Countries Across Asia & Africa"
            image="https://assets.rumsan.net/rahat/b4d943398fb0fda5ee391a0f251b285818543545.jpg"
            height="307px"
          />

          {/* Lives Impacted */}
          <StatCard
            icon={<Users className="w-12 h-12" strokeWidth={1.5} />}
            number="1M+"
            label="Lives Impacted"
            image="https://assets.rumsan.net/rahat/0e086dcedcfc654fd9c69b52aa2425bd655242a9.jpg"
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
            image="https://assets.rumsan.net/rahat/1d2d3ff5f6c5b6a6aa82d6b7b7104719f3b6e6d2.jpg"
            height="259px"
          />
        </div>
      </div>
    </section>
  );
};
