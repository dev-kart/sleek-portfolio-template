"use client";

import { motion } from "framer-motion";
import { Mail, Coffee } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 gradient-text">Get in Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Email Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Have a project in mind? Let&apos;s discuss how we can work together.
            </p>
            <a
              href="mailto:contact@example.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              contact@example.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <Coffee className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Support My Work</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              If you find my work helpful, consider buying me a coffee.
            </p>
            <a
              href="https://buymeacoffee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Buy me a coffee
            </a>
          </motion.div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
}
