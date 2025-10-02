"use client";

import { X, ExternalLink, Github, Play, Calendar, Users, Code2, Zap } from "lucide-react";
import { Project } from "./ProjectModal";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
      <div 
        className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border-2 border-gray-300 dark:border-gray-600 w-full max-w-7xl h-[95vh] overflow-hidden transform transition-all duration-300 scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="flex justify-between items-start p-10 border-b-2 border-gray-200 dark:border-gray-700 bg-gradient-to-r from-pink-50 to-yellow-50 dark:from-gray-800 dark:to-gray-800">
          <div className="flex-1 pr-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-6">
              <span className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full text-lg font-semibold shadow-xl">
                {project.type}
              </span>
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <span className="px-4 py-2 bg-green-500 text-white rounded-full text-base font-medium shadow-lg">
                      Live Demo
                    </span>
                  )}
                  {project.githubUrl && (
                    <span className="px-4 py-2 bg-gray-600 text-white rounded-full text-base font-medium shadow-lg">
                      Source Code
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-2 border-gray-200 dark:border-gray-600 mt-2"
          >
            <X className="h-7 w-7 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(95vh-120px)]">
          {/* Main Content Grid */}
          <div className="grid xl:grid-cols-2 gap-12 p-10">
            {/* Left Column - Media & Links */}
            <div className="space-y-8">
              {/* Project Image - Larger */}
              <div className="rounded-3xl overflow-hidden shadow-3xl border-2 border-gray-200 dark:border-gray-700">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-96 object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Video Demo */}
              {project.videoUrl && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                    <Play className="h-7 w-7 text-pink-500" />
                    Video Demonstration
                  </h3>
                  <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                    <iframe
                      src={project.videoUrl.replace("watch?v=", "embed/")}
                      className="w-full h-full"
                      allowFullScreen
                      title={`${project.title} Demo`}
                    />
                  </div>
                </div>
              )}

              {/* Action Links */}
              <div className="flex gap-6">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink className="h-6 w-6" />
                    View Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 bg-gray-800 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="h-6 w-6" />
                    View Source Code
                  </a>
                )}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-8">
              {/* Full Description */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-600 pb-4">
                  Project Overview
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xl">
                  {project.fullDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-600 pb-4">
                  Technologies & Tools
                </h3>
                <div className="flex flex-wrap gap-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-6 py-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-xl font-semibold text-lg shadow-xl transform transition-transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white border-b-2 border-gray-200 dark:border-gray-600 pb-4">
                  Key Features
                </h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  {project.fullDescription.split('. ').slice(0, 4).map((feature, index) => (
                    feature.trim() && (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full mt-3 flex-shrink-0" />
                        <span className="text-xl leading-relaxed">{feature.trim()}.</span>
                      </li>
                    )
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* My Role Section */}
          <div className="px-10 pb-10">
            <div className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-3xl p-10 text-white">
              <h3 className="text-3xl font-bold mb-8 text-center">My Role & Responsibilities</h3>
              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-xl mb-3">UI/UX Design</h4>
                  <p className="text-white/90 text-lg">User research, wireframing, prototyping</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Code2 className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-xl mb-3">Development</h4>
                  <p className="text-white/90 text-lg">Full-stack implementation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-xl mb-3">Project Management</h4>
                  <p className="text-white/90 text-lg">Agile methodology & team leadership</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-xl mb-3">Testing & Deployment</h4>
                  <p className="text-white/90 text-lg">Quality assurance & production release</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}