"use client";

import { motion } from "framer-motion";
import { Rocket, Clock, CheckCircle } from "lucide-react";
import Image from "next/image";

// Define the type for statuses
type VentureStatus = "active" | "ongoing" | "completed";

interface Venture {
  title: string;
  description: string;
  image: string;
  status: VentureStatus;
  year: number;
}

const ventures: Venture[] = [
  {
    title: "EcoWaste Solutions",
    description:
      "Smart waste management platform revolutionizing city cleanliness through IoT and AI.",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=400&fit=crop",
    status: "active",
    year: 2023,
  },
  {
    title: "AI Writing Assistant",
    description:
      "AI-powered platform helping content creators write better and faster.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    status: "ongoing",
    year: 2024,
  },
];

const statusIcons: Record<VentureStatus, JSX.Element> = {
  active: <Rocket className="w-5 h-5 text-green-500" />,
  ongoing: <Clock className="w-5 h-5 text-blue-500" />,
  completed: <CheckCircle className="w-5 h-5 text-purple-500" />,
};

const statusColors: Record<VentureStatus, string> = {
  active: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300",
  ongoing: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300",
  completed:
    "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300",
};

export default function Ventures() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 gradient-text">
          Entrepreneurial Ventures
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={venture.image}
                alt={venture.title}
                height={200}
                width={800}
                className="w-full h-48 object-cover"
                unoptimized={true}
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{venture.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm flex items-center space-x-1 ${
                        statusColors[venture.status]
                      }`}
                    >
                      {statusIcons[venture.status]}
                      <span className="capitalize">{venture.status}</span>
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {venture.description}
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Started in {venture.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
