import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BentoGrid from "@/components/projects/BentoGrid";
import ProjectCard from "@/components/projects/ProjectCard";
import CaseStudyPopup, { CaseStudyProject } from "@/components/projects/CaseStudyPopup";
import { brandCampaignProjects } from "@/data/projects";

export default function BrandCampaignPage() {
  const [selectedProject, setSelectedProject] = useState<CaseStudyProject | null>(null);

  return (
    <Layout>
      <div className="container-full py-12">
        <Breadcrumbs
          items={[
            { label: "Brand & Campaign" },
          ]}
        />

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-headline mb-6">Brand & Campaign Visual Communication</h1>
          <p className="text-body-lg text-muted-foreground">
            Creating compelling visual narratives for brands that want to make an impact. 
            From product launches to awareness campaigns, each project tells a unique story 
            that resonates with its audience.
          </p>
        </div>

        {/* Projects Grid */}
        <BentoGrid columns={3}>
          {brandCampaignProjects.map((project, index) => (
            <div key={project.id} className={index % 5 === 0 ? "md:col-span-2" : ""}>
              <ProjectCard
                id={project.id}
                title={project.title}
                category={project.category}
                thumbnail={project.thumbnail}
                onClick={() => setSelectedProject(project)}
                size={index % 5 === 0 ? "large" : "medium"}
              />
            </div>
          ))}
        </BentoGrid>
      </div>

      {/* Case Study Popup */}
      <CaseStudyPopup
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        breadcrumb="Brand & Campaign"
      />
    </Layout>
  );
}
