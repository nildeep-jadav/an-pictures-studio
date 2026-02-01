import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ClientLogos from "@/components/sections/ClientLogos";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ContactCTA from "@/components/sections/ContactCTA";
import {
  brandCampaignProjects,
  designCollateralsProjects,
  logoIdentityProjects,
  photographyProjects,
} from "@/data/projects";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ClientLogos />

      {/* Featured Brand & Campaign */}
      <FeaturedProjects
        title="Brand & Campaign Visual Communication"
        description="Visual design work developed for brand campaigns, social communication, and print collateral across industries"
        projects={brandCampaignProjects.slice(0, 5)}
        viewAllLink="/brand-campaign"
        category="Brand Campaign"
      />

      {/* Featured Design Collaterals */}
      <div className="bg-secondary">
        <FeaturedProjects
          title="Design Collaterals & Video Content"
          description="Brand collaterals, digital static and video contents developed for digital and print use.."
          projects={designCollateralsProjects.slice(0, 5)}
          viewAllLink="/design-collaterals"
          category="Design Collaterals"
        />
      </div>

      {/* Featured Logo & Identity */}
      <FeaturedProjects
        title="Logo & Identity Design"
        description="Logos developed for startups and growing brands across multiple industries"
        projects={logoIdentityProjects.slice(0, 5)}
        viewAllLink="/logo-identity"
        category="Brand Identity"
      />

      {/* Featured Photography */}
      <div className="bg-secondary">
        <FeaturedProjects
          title="Photography"
          description="Photography work created for brands, environments, and occasions"
          projects={photographyProjects.slice(0, 5).map((project) => ({
            id: project.id,
            title: project.title,
            thumbnail: project.thumbnail,
            category: project.category,
          }))}
          viewAllLink="/photography"
          category="Photography"
        />
      </div>

      <ContactCTA />
    </Layout>
  );
};

export default Index;
