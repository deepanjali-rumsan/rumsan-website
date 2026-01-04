import { Container } from "@/components/ui/container";
import { Briefcase, GraduationCap } from "lucide-react";

export default function PerksSection() {
  return (
    <section className="py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[#4252FF]">Perks</span>{" "}
            <span className="text-gray-600">At Rumsan</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
            If you&apos;re looking for a place where your ideas matter, your
            skills can flourish, and your work contributes to something bigger,
            you&apos;ll feel right at home here. Whether you&apos;re an engineer,
            designer, researcher, or problem-solver, you&apos;ll work on
            projects that challenge you and create lasting impact.
          </p>
          <p className="text-base md:text-lg text-gray-700">
            <a
              href="/contact"
              className="text-[#4252FF] underline hover:text-[#4252FF]/80 transition-colors"
            >
              Join us
            </a>{" "}
            in building technology that empowers people, strengthens systems, and
            shapes the future.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Work Culture Card */}
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Briefcase className="w-6 h-6 text-[#4252FF]" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                Work Culture
              </h4>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              We foster an environment that respects work-life balance and
              empowers you to do your best work.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm md:text-base text-gray-700">
                5-day work week
              </span>
              <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm md:text-base text-gray-700">
                Free lunch at the office
              </span>
              <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm md:text-base text-gray-700">
                Gen-Z
              </span>
            </div>
          </div>

          {/* Learning & Career Growth Card */}
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-50 rounded-lg">
                <GraduationCap className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                Learning & Career Growth
              </h4>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              We invest in continuous learning to help you grow your career and
              stay ahead in a rapidly evolving tech landscape.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm md:text-base text-gray-700">
                Training and learning fund
              </span>
              <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm md:text-base text-gray-700">
                College scholarship program through partner colleges
              </span>
            </div>
          </div>

          {/* Financial Benefits Card */}
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Briefcase className="w-6 h-6 text-[#4252FF]" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                Financial Benefits
              </h4>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              We believe in supporting our team—both professionally and
              financially.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm md:text-base text-gray-700">
                Annual performance bonus
              </span>
              <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm md:text-base text-gray-700">
                CIT Fund
              </span>
              <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm md:text-base text-gray-700">
                Dashain bonus
              </span>
              <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm md:text-base text-gray-700">
                Advance salary request option
              </span>
            </div>
          </div>

          {/* Leave & Well Being Card */}
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-50 rounded-lg">
                <GraduationCap className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                Leave & Well Being
              </h4>
            </div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Your health, family, and well-being matter.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm md:text-base text-gray-700">
                Paid leave
              </span>
              <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm md:text-base text-gray-700">
                Maternity leave
              </span>
              <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm md:text-base text-gray-700">
                Personal and Family Insurance coverage
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

