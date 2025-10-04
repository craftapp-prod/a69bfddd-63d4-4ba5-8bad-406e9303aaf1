"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">
                &copy; {currentYear} Authfolio. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/about"
                className="text-sm text-gray-500 hover:text-primary-600 transition"
              >
                About
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-500 hover:text-primary-600 transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-500 hover:text-primary-600 transition"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-600 transition"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-600 transition"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-600 transition"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@authfolio.com"
              className="text-gray-500 hover:text-primary-600 transition"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;