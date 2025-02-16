"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Smart Waste Management",
    description:
      "IoT-based waste management system with real-time monitoring and route optimization.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "IoT"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "AI Content Assistant",
    description:
      "AI-powered writing assistant that helps create engaging content.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    tags: ["Next.js", "OpenAI", "TailwindCSS"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
  },
];

export default function Development() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 gradient-text">
          Web Development Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                height={200}
                width={800}
                className="w-full h-48 object-cover"
                unoptimized={true}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
