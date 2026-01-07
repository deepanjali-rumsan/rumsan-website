import { Container } from "@/components/ui/container";
import { Calendar, Clock, List, ArrowRight } from "lucide-react";
import Link from "next/link";
import { jobs } from "@/src/lib/data/jobs";

export default function CurrentOpeningsSection() {
  const jobOpenings = jobs.map((job) => ({
    slug: job.slug,
    title: job.title,
    deadline: job.deadline,
    jobType: job.jobType,
    postOpening: job.postOpening,
    description: job.shortDescription,
  }));

  return (
    <section className="py-10 bg-[#F6F7FE]">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4252FF] mb-4">
            Current 
            <span className="text-gray-600"> Openings</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Ready to find your next challenge? We are currently looking for
            talented individuals across several departments. Click on a role to
            view the full description and apply.
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow flex flex-col"
            >
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {job.title}
              </h4>

              {/* Job Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>Application Deadline: {job.deadline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>Job Type: {job.jobType}</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                  <List className="w-4 h-4 text-gray-400" />
                  <span>Post Opening: {job.postOpening}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                {job.description}
              </p>

              {/* Apply Button */}
              <Link
                href={`/career/${job.slug}`}
                className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors mt-auto w-fit"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
