import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CaseStudyProject {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  images: string[];
  client?: string;
  year?: string;
}

interface CaseStudyPopupProps {
  project: CaseStudyProject | null;
  onClose: () => void;
  breadcrumb?: string;
}

export default function CaseStudyPopup({
  project,
  onClose,
  breadcrumb,
}: CaseStudyPopupProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Popup Container */}
      <div className="absolute inset-4 md:inset-8 lg:inset-12 bg-background rounded-lg overflow-hidden animate-scale-in shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {breadcrumb && <span>{breadcrumb} → </span>}
            <span className="text-foreground font-medium">{project.title}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-secondary"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-[calc(100%-65px)] scrollbar-thin">
          {/* Hero Image */}
          <div className="aspect-[21/9] w-full bg-secondary">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Info */}
          <div className="container-tight py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {project.category}
                </span>
                <h1 className="text-headline mt-2">{project.title}</h1>
              </div>
              <div className="space-y-4">
                {project.client && (
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">
                      Client
                    </span>
                    <span className="font-medium">{project.client}</span>
                  </div>
                )}
                {project.year && (
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">
                      Year
                    </span>
                    <span className="font-medium">{project.year}</span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-body-lg text-muted-foreground max-w-3xl mb-16">
              {project.description}
            </p>

            {/* Image Gallery */}
            <div className="space-y-8">
              {project.images.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden bg-secondary">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    loading="lazy"
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
