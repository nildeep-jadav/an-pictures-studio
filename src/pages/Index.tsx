import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ClientLogos from "@/components/sections/ClientLogos";
import AboutPreview from "@/components/sections/AboutPreview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ContactCTA from "@/components/sections/ContactCTA";
import {
  brandCampaignProjects,
  designCollateralsProjects,
  logoIdentityProjects,
  photographyImages,
} from "@/data/projects";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ClientLogos />
      <AboutPreview />

      {/* Featured Brand & Campaign */}
      <FeaturedProjects
        title="Brand & Campaign Visual Communication"
        description="Creating compelling visual narratives for brands that want to make an impact. From launch campaigns to ongoing brand communication."
        projects={brandCampaignProjects.slice(0, 5)}
        viewAllLink="/brand-campaign"
        category="Brand Campaign"
      />

      {/* Featured Design Collaterals */}
      <div className="bg-secondary">
        <FeaturedProjects
          title="Design Collaterals & Video Content"
          description="Social media creatives, event materials, motion graphics, and campaign adaptations across multiple platforms."
          projects={designCollateralsProjects.slice(0, 5)}
          viewAllLink="/design-collaterals"
          category="Design Collaterals"
        />
      </div>

      {/* Featured Logo & Identity */}
      <FeaturedProjects
        title="Logo & Identity Design"
        description="Building memorable brand identities that resonate with audiences and stand the test of time."
        projects={logoIdentityProjects.slice(0, 5)}
        viewAllLink="/logo-identity"
        category="Brand Identity"
      />

      {/* Featured Photography */}
      <div className="bg-secondary">
        <FeaturedProjects
          title="Photography"
          description="Capturing moments, spaces, and products with a keen eye for composition and storytelling."
          projects={photographyImages.slice(0, 5).map((img, i) => ({
            id: `photo-${i}`,
            title: img.alt,
            thumbnail: img.src,
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
