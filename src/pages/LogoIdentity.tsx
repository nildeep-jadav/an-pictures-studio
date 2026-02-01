import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BentoGrid from "@/components/projects/BentoGrid";
import ProjectCard from "@/components/projects/ProjectCard";
import CaseStudyPopup, { CaseStudyProject } from "@/components/projects/CaseStudyPopup";
import { logoIdentityProjects } from "@/data/projects";

export default function LogoIdentityPage() {
  const [selectedProject, setSelectedProject] = useState<CaseStudyProject | null>(null);

  return (
    <Layout>
      <div className="container-full py-12">
        <Breadcrumbs
          items={[
            { label: "Logo & Identity" },
          ]}
        />

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-headline mb-6">Logo & Identity Design</h1>
          <p className="text-body-lg text-muted-foreground">
            Building memorable brand identities that resonate with audiences and stand the test 
            of time. From startups to established businesses, every brand deserves a visual 
            identity that tells its unique story.
          </p>
        </div>

        {/* Projects Grid */}
        <BentoGrid columns={3}>
          {logoIdentityProjects.map((project, index) => (
            <div key={project.id} className={index % 4 === 0 ? "md:col-span-2" : ""}>
              <ProjectCard
                id={project.id}
                title={project.title}
                category={project.category}
                thumbnail={project.thumbnail}
                onClick={() => setSelectedProject(project)}
                size={index % 4 === 0 ? "large" : "medium"}
              />
            </div>
          ))}
        </BentoGrid>
      </div>

      {/* Case Study Popup */}
      <CaseStudyPopup
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        breadcrumb="Logo & Identity"
      />
    </Layout>
  );
}
