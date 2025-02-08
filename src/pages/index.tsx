import { Navbar } from "@/components/blocks/navbar";
import { HeroSection } from "@/components/blocks/hero-section";
import { ServicesSection } from "@/components/blocks/services-section";
import { ContactSection } from "@/components/blocks/contact-section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div id="inicio">
          <HeroSection />
        </div>
        <ServicesSection />
        <ContactSection />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Protect Armour. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}