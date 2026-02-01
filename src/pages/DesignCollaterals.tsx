import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BentoGrid from "@/components/projects/BentoGrid";
import ProjectCard from "@/components/projects/ProjectCard";
import CaseStudyPopup, { CaseStudyProject } from "@/components/projects/CaseStudyPopup";
import { designCollateralsProjects } from "@/data/projects";

export default function DesignCollateralsPage() {
  const [selectedProject, setSelectedProject] = useState<CaseStudyProject | null>(null);

  return (
    <Layout>
      <div className="container-full py-12">
        <Breadcrumbs
          items={[
            { label: "Design Collaterals" },
          ]}
        />

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-headline mb-6">Design Collaterals & Video Content</h1>
          <p className="text-xl font-medium text-foreground mb-6">
            Brand collaterals, digital static and video contents developed for digital and print use..
          </p>
          <p className="text-body-lg text-muted-foreground">
            This collection brings together brand collaterals, digital static designs, and video content created for both digital and print platforms. The work includes posters, flyers, business cards, invitations, announcements, and short-form video pieces developed to support everyday brand and personal communication needs. Each project focuses on clarity, structure, and visual consistency, ensuring the designs remain functional, adaptable, and effective across formats and use cases.
          </p>
        </div>

        {/* Projects Grid */}
        <BentoGrid columns={3}>
          {designCollateralsProjects.map((project, index) => (
            <div key={project.id} className={index % 7 === 0 ? "md:col-span-2" : ""}>
              <ProjectCard
                id={project.id}
                title={project.title}
                category={project.category}
                thumbnail={project.thumbnail}
                onClick={() => setSelectedProject(project)}
                size={index % 7 === 0 ? "large" : "medium"}
              />
            </div>
          ))}
        </BentoGrid>
      </div>

      {/* Case Study Popup */}
      <CaseStudyPopup
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        breadcrumb="Design Collaterals"
      />
    </Layout>
  );
}
