import Image from "next/image";
import { Folder, Globe, Users, Heart, GithubIcon } from "lucide-react";

export default function ImpactStatsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 md:mb-16 leading-tight text-center text-4xl md:text-5xl font-bold">
          <span style={{ color: "#4252FF" }}>Turning Impact Into</span>
          <br />
          <span className="text-gray-600">Measurable Change</span>
        </h2>

        <div className="flex flex-nowrap justify-center items-end gap-4 md:gap-6 overflow-x-auto pb-4">
          {/* Box 1 - Projects Deployed */}
          <div className="relative overflow-hidden rounded-3xl flex-shrink-0 w-[240px] lg:w-[260px] h-[320px] transition-transform duration-500 hover:-translate-y-2">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Projects Deployed"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <Folder className="w-12 h-12 mb-4" strokeWidth={1.5} />
              <p className="text-4xl md:text-5xl font-bold mb-2">10</p>
              <p className="text-base md:text-lg">Projects Deployed</p>
            </div>
          </div>

          {/* Box 2 - Countries Across */}
          <div className="relative overflow-hidden rounded-3xl flex-shrink-0 w-[240px] lg:w-[260px] h-[360px] transition-transform duration-500 hover:-translate-y-2">
            <Image
              src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80"
              alt="Countries Across"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <Globe className="w-12 h-12 mb-4" strokeWidth={1.5} />
              <p className="text-4xl md:text-5xl font-bold mb-2">45</p>
              <p className="text-base md:text-lg text-center px-4">
                Countries Across
                <br />
                Asia & Africa
              </p>
            </div>
          </div>

          {/* Box 3 - Lives Impacted */}
          <div className="relative overflow-hidden rounded-3xl flex-shrink-0 w-[280px] lg:w-[300px] h-[380px] transition-transform duration-500 hover:-translate-y-2">
            <Image
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80"
              alt="Lives Impacted"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/80 via-blue-500/80 to-purple-600/80"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <Users className="w-14 h-14 mb-4" strokeWidth={1.5} />
              <p className="text-5xl md:text-6xl font-bold mb-2">1M+</p>
              <p className="text-lg md:text-xl">Lives Impacted</p>
            </div>
          </div>

          {/* Box 4 - Hours Volunteers */}
          <div className="relative overflow-hidden rounded-3xl flex-shrink-0 w-[240px] lg:w-[260px] h-[360px] transition-transform duration-500 hover:-translate-y-2">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
              alt="Hours Volunteers"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <Heart className="w-12 h-12 mb-4" strokeWidth={1.5} />
              <p className="text-4xl md:text-5xl font-bold mb-2">200+</p>
              <p className="text-base md:text-lg">Hours Volunteers</p>
            </div>
          </div>

          {/* Box 5 - Github Commit */}
          <div className="relative overflow-hidden rounded-3xl flex-shrink-0 w-[240px] lg:w-[260px] h-[320px] transition-transform duration-500 hover:-translate-y-2">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Github Commit"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <GithubIcon className="w-12 h-12 mb-4" strokeWidth={1.5} />
              <p className="text-4xl md:text-5xl font-bold mb-2">45,000+</p>
              <p className="text-base md:text-lg">Github Commit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
