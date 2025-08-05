import { useRouter } from "next/router";
import { projects } from "@/data/projects";

function getYouTubeVideoId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|watch\?.+&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

function getEmbedUrl(url: string) {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return url;
    return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
  }
  if (url.includes("vimeo.com")) {
    const videoId = url.split("/").pop();
    return `https://player.vimeo.com/video/${videoId}`;
  }
  return url;
}

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-40 pb-16 text-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
      </div>
    );
  }

  const isEmbedVideo =
    project.videoUrl &&
    (project.videoUrl.includes("youtube.com") ||
      project.videoUrl.includes("youtu.be") ||
      project.videoUrl.includes("vimeo.com"));

  return (
    <div className="pt-40 pb-16 container mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      {project.image && (
        <img
          src={project.image.src}
          alt={project.title}
          className="rounded-lg mb-6 max-h-[60vh] object-contain w-full"
        />
      )}

      {project.videoUrl && (
        <div className="mb-6 rounded-lg overflow-hidden max-h-[60vh]">
          {isEmbedVideo ? (
            <iframe
              src={getEmbedUrl(project.videoUrl)}
              title={project.title}
              className="w-full h-[360px] sm:h-[480px] md:h-[60vh] rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={project.videoUrl}
              controls
              autoPlay
              muted
              className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
            />
          )}
        </div>
      )}

      <p className="text-lg text-muted-foreground mb-6">{project.fullDescription}</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Technologies:</h2>
        <ul className="list-disc list-inside">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-pink-400 to-yellow-300 text-white rounded-lg shadow-lg"
          >
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
