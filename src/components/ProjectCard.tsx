import { Badge } from "@/components/ui/badge";
import { Project } from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      className="card-hover group animate-fade-up"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {project.type}
          </Badge>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 8).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="btn-skill text-xs"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 8 && (
            <Badge variant="outline" className="btn-skill text-xs">
              +{project.technologies.length - 8} more
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}