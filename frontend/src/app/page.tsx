import Link from "next/link";
import { LayoutDashboard, Palette, Briefcase, Contact, ShieldCheck, Eye, Lock, Users, Rocket } from "lucide-react";
import Image from "next/image";

const portfolioExamples = [
  {
    id: 1,
    title: "Digital Illustrations",
    description: "Collection of digital artwork and illustrations",
    image: "https://images.unsplash.com/photo-1569154076682-4c0466623ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTk1NzY4ODl8&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Digital illustrations portfolio example"
  },
  {
    id: 2,
    title: "Web Design Projects",
    description: "Modern website designs and UI concepts",
    image: "https://images.unsplash.com/photo-1639717995202-02db625f64a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTk1NzY4ODh8&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Web design portfolio example"
  },
  {
    id: 3,
    title: "Photography Portfolio",
    description: "Professional photography works",
    image: "https://images.unsplash.com/photo-1639010674611-025ba3d058b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTk1NzY4ODh8&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Photography portfolio example"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 text-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text">
                Showcase Your Creativity
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Authfolio is a secure portfolio platform for creative professionals to display their work,
                manage their online presence, and connect with potential clients.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Link
                href="/register"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                Create Your Portfolio
              </Link>
              <Link
                href="/explore"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
              >
                Explore Portfolios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
            <p className="max-w-[85%] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to create and manage your professional portfolio
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md">
              <div className="p-3 rounded-full bg-primary-100">
                <LayoutDashboard className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold">Custom Dashboard</h3>
              <p className="text-sm text-gray-600 text-center">
                Manage your portfolio with an intuitive dashboard interface
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md">
              <div className="p-3 rounded-full bg-primary-100">
                <Palette className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold">Portfolio Showcase</h3>
              <p className="text-sm text-gray-600 text-center">
                Display your work with beautiful gallery layouts
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md">
              <div className="p-3 rounded-full bg-primary-100">
                <ShieldCheck className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold">Secure Access</h3>
              <p className="text-sm text-gray-600 text-center">
                Control who can view your portfolio with privacy settings
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md">
              <div className="p-3 rounded-full bg-primary-100">
                <Contact className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold">Contact Management</h3>
              <p className="text-sm text-gray-600 text-center">
                Manage your contact information and inquiries
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[58rem] flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Portfolio Examples</h2>
            <p className="max-w-[85%] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how creative professionals are using Authfolio to showcase their work
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {portfolioExamples.map((item) => (
                <div key={item.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[58rem] flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to showcase your work?</h2>
            <p className="max-w-[85%] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of creative professionals using Authfolio to display their portfolios
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Link
                href="/register"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                Get Started
              </Link>
              <Link
                href="/login"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}