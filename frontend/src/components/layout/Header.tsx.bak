"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { User, LogOut, LogIn, UserPlus, LayoutDashboard, Palette, Briefcase, Contact } from "lucide-react";
import Image from "next/image";
import { API_URL } from "@/utils/env";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-3">
              <Image
                src={`${API_URL}/assets/default/craftapp-logo.svg`}
                alt="Authfolio Logo"
                width={32}
                height={32}
                className="h-8 w-8"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <Link
                href="/"
                className="text-xl font-bold text-primary-600 hover:text-primary-500 transition"
              >
                Authfolio
              </Link>
            </div>
          </div>

          <nav className="flex items-center space-x-1 md:space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center text-gray-600 hover:text-primary-600 px-2 py-1 md:px-3 md:py-2 rounded-md text-sm font-medium transition"
                >
                  <LayoutDashboard className="mr-1 h-4 w-4" />
                  <span className="hidden md:inline">Dashboard</span>
                </Link>
                <Link
                  href="/portfolio"
                  className="flex items-center text-gray-600 hover:text-primary-600 px-2 py-1 md:px-3 md:py-2 rounded-md text-sm font-medium transition"
                >
                  <Palette className="mr-1 h-4 w-4" />
                  <span className="hidden md:inline">Portfolio</span>
                </Link>
                <Link
                  href="/projects"
                  className="flex items-center text-gray-600 hover:text-primary-600 px-2 py-1 md:px-3 md:py-2 rounded-md text-sm font-medium transition"
                >
                  <Briefcase className="mr-1 h-4 w-4" />
                  <span className="hidden md:inline">Projects</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center text-gray-600 hover:text-primary-600 px-2 py-1 md:px-3 md:py-2 rounded-md text-sm font-medium transition"
                >
                  <Contact className="mr-1 h-4 w-4" />
                  <span className="hidden md:inline">Contact</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center text-gray-600 hover:text-primary-600 px-2 py-1 md:px-3 md:py-2 rounded-md text-sm font-medium transition"
                >
                  <LogOut className="mr-1 h-4 w-4" />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center text-gray-600 hover:text-primary-600 px-2 py-1 md:px-3 md:py-2 rounded-md text-sm font-medium transition"
                >
                  <LogIn className="mr-1 h-4 w-4" />
                  <span className="hidden md:inline">Login</span>
                </Link>
                <Link
                  href="/register"
                  className="flex items-center bg-primary-600 text-white hover:bg-primary-700 px-3 py-1 md:px-4 md:py-2 rounded-md text-sm font-medium transition"
                >
                  <UserPlus className="mr-1 h-4 w-4" />
                  <span className="hidden md:inline">Register</span>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;