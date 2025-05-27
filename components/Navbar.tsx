"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

// Define navigation links
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dashboards", label: "Dashboards" },
  { href: "/services", label: "Services" },
  { href: "/requests", label: "Requests" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-bcgov-blue border-b border-bcgov-gold shadow-sm" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Navigation toggle button (always visible but functionally different based on screen size) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-bcgov-gold md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop navigation - hidden by default, shown on medium screens and up */}
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className={`text-white hover:text-bcgov-gold hover:bg-bcgov-blue/80 ${
                      isActive
                        ? "bg-bcgov-blue/80 border-b-2 border-bcgov-gold"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile menu - collapsible menu for small screens */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden md:hidden ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="flex flex-col space-y-1 py-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white hover:text-bcgov-gold hover:bg-bcgov-blue/80 py-2 px-3 rounded ${
                    isActive
                      ? "bg-bcgov-blue/80 border-l-4 pl-2 border-bcgov-gold"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
