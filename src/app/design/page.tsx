"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const designs = [
  {
    title: "Brand Identity Design",
    category: "Branding",
    description:
      "Complete brand identity design including logo, color palette, and typography.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    tools: ["Figma", "Illustrator"],
    link: "https://example.com",
  },
  {
    title: "Mobile App UI Design",
    category: "UI/UX",
    description:
      "Modern and intuitive mobile app interface design with focus on user experience.",
    image:
      "https://images.unsplash.com/photo-1616363088386-31c4a8414858?w=800&h=400&fit=crop",
    tools: ["Figma", "Protopie"],
    link: "https://example.com",
  },
];

export default function Design() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 gradient-text">
          Design Portfolio
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {designs.map((design, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={design.image}
                alt={design.title}
                height={200}
                width={800}
                className="w-full h-48 object-cover"
                unoptimized={true}
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{design.title}</h3>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                    {design.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {design.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {design.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <a
                  href={design.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Project</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
