import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Lightbox from "@/components/projects/Lightbox";
import { photographyImages } from "@/data/projects";

export default function PhotographyPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <Layout>
      <div className="container-full py-12">
        <Breadcrumbs
          items={[
            { label: "Photography" },
          ]}
        />

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-headline mb-6">Photography</h1>
          <p className="text-body-lg text-muted-foreground">
            Capturing moments, spaces, and products with a keen eye for composition 
            and storytelling. From architectural interiors to wedding celebrations, 
            each frame tells a story.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photographyImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setLightboxIndex(index)}
              className={`
                cursor-pointer overflow-hidden rounded-lg bg-secondary group
                ${index % 5 === 0 ? "col-span-2 row-span-2" : ""}
                ${index % 7 === 3 ? "col-span-2" : ""}
              `}
            >
              <div className="relative aspect-square w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={photographyImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      )}
    </Layout>
  );
}
