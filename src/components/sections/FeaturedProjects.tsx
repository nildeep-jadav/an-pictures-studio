import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BentoGrid, { BentoItem } from "@/components/projects/BentoGrid";
import ProjectCard from "@/components/projects/ProjectCard";

interface FeaturedProject {
  id: string;
  title: string;
  thumbnail: string;
}

interface FeaturedProjectsProps {
  title: string;
  description: string;
  projects: FeaturedProject[];
  viewAllLink: string;
  category: string;
}

export default function FeaturedProjects({
  title,
  description,
  projects,
  viewAllLink,
  category,
}: FeaturedProjectsProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="container-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-headline mb-4">{title}</h2>
            <p className="text-body text-muted-foreground">{description}</p>
          </div>
          <Link
            to={viewAllLink}
            className="inline-flex items-center gap-2 text-foreground font-medium link-underline whitespace-nowrap"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Projects Grid */}
        <BentoGrid columns={3}>
          {projects.slice(0, 3).map((project, index) => (
            <BentoItem key={project.id} span={index === 0 ? 2 : 1}>
              <Link to={viewAllLink}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  category={category}
                  thumbnail={project.thumbnail}
                  onClick={() => {}}
                  size={index === 0 ? "large" : "medium"}
                />
              </Link>
            </BentoItem>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
