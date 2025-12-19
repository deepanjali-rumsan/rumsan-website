import { StatCard } from "./impact-card";
import { statsData } from "./impact-data";

export const ImpactStats = () => {
  return (
    <section className="py-20 px-4 ">
      <div className="max-w-8xl mx-auto">
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
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};







