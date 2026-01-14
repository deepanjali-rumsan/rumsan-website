import { Container } from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/src/lib/data/projects";

export default function ProjectsGrid() {
  return (
    <section className="py-12 md:py-10 lg:py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:-translate-y-2 h-[350px] md:h-[400px] lg:h-[520px] block"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Default gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>

              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255, 218, 185, 1) 0%, rgba(220, 180, 240, 1) 45%, rgba(140, 150, 255, 1) 100%)",
                }}
              ></div>

              {/* Content visible by default */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-opacity duration-500">
                <h4 className="text-white text-xl md:text-2xl font-bold mb-2">
                  {project.title}
                </h4>
                <p className="text-white/90 text-sm md:text-base line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
