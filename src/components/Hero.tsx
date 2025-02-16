import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Image
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
            alt="Profile"
            height={160}
            width={160}
            className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-blue-500 dark:border-blue-400"
            unoptimized={true}
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
          I&apos;m Kartikey
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Tech enthusiast, web developer, designer, and entrepreneur
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          {[
            { Icon: Github, href: "https://github.com" },
            { Icon: Linkedin, href: "https://linkedin.com" },
            { Icon: Twitter, href: "https://twitter.com" },
          ].map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
        >
          View My Work
        </a>
      </div>
    </div>
  );
};

export default Hero;
