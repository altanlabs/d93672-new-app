import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Protect Armour
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('inicio')}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300"
            >
              Inicio
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('servicios')}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300"
            >
              Servicios
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('contacto')}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300"
            >
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection('inicio')}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300"
              >
                Inicio
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('servicios')}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300"
              >
                Servicios
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('contacto')}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300"
              >
                Contacto
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};