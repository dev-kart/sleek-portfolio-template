"use client";
import React from "react";
import Link from "next/link"; // ✅ Correct import for Next.js
import { usePathname } from "next/navigation"; // ✅ Replaces useLocation()
import { ThemeToggle } from "./ThemeToggle";
import { Code, Palette, Briefcase, Mail } from "lucide-react";

const navItems = [
  { path: "/development", icon: Code, label: "Development" },
  { path: "/design", icon: Palette, label: "Design" },
  { path: "/ventures", icon: Briefcase, label: "Ventures" },
  { path: "/contact", icon: Mail, label: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname(); // ✅ Get the current route in Next.js

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold">
            Kartikey
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                href={path}
                className={`flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                  pathname === path ? "text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
