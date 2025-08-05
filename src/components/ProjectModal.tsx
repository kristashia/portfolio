import { useEffect, useRef } from "react";
import { X, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogClose,
} from "@/components/ui/dialog";

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image?: string;
  videoUrl?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  challenges?: string[];
  role?: string;
  type:
    | "UI/UX Design"
    | "Full Stack Development"
    | "Graphic Design"
    | "Game Development";
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// Helper to extract YouTube video ID robustly
function getYouTubeVideoId(url: string) {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|watch\?.+&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

// Builds the embed URL with autoplay & mute params
function getEmbedUrl(url: string) {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return url;
    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&rel=0`;
  }
  if (url.includes("vimeo.com")) {
    const videoId = url.split("/").pop();
    return `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1`;
  }
  return url;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  if (!project) return null;

  const isEmbedVideo =
    project.videoUrl &&
    (project.videoUrl.includes("youtube.com") ||
      project.videoUrl.includes("youtu.be") ||
      project.videoUrl.includes("vimeo.com"));

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
        <DialogHeader className="space-y-0">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <Badge variant="secondary" className="w-fit">
                {project.type}
              </Badge>
              <h2 className="text-3xl font-bold">{project.title}</h2>
            </div>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <X className="h-5 w-5" />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Media: Video (autoplay) or Image */}
          {project.videoUrl ? (
            <div className="relative rounded-xl overflow-hidden bg-muted max-h-[60vh]">
              {isEmbedVideo ? (
                <iframe
                  src={getEmbedUrl(project.videoUrl)}
                  title={project.title}
                  className="w-full h-[360px] sm:h-[480px] md:h-[60vh] rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  // For autoplay to work on some browsers:
                  // - muted is handled by URL param in embed src
                />
              ) : (
                <video
                  ref={videoRef}
                  src={project.videoUrl}
                  controls
                  autoPlay
                  muted
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
              )}
            </div>
          ) : project.image ? (
            <div className="relative rounded-xl overflow-hidden bg-muted max-h-[60vh]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
            </div>
          ) : null}

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-3">About This Project</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Role */}
          {project.role && (
            <div>
              <h3 className="text-xl font-semibold mb-3">My Role</h3>
              <p className="text-muted-foreground">{project.role}</p>
            </div>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Challenges & Lessons
              </h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground flex items-start"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="btn-skill">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
              {project.liveUrl && (
                <Button asChild className="btn-hero">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Site
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild className="btn-ghost">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
