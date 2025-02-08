import { Navbar } from "@/components/blocks/navbar";
import { HeroSection } from "@/components/blocks/hero-section";
import { ServicesSection } from "@/components/blocks/services-section";
import { FeaturesSection } from "@/components/blocks/features-section";
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
        <FeaturesSection />
        <ContactSection />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Protect Armour</h3>
            <p className="text-gray-300">Especialistas en Marine Protection Film</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-300">Contacto: info@protectarmour.com</p>
            <p className="text-gray-300">Tel: +34 XXX XXX XXX</p>
          </div>
          <div className="border-t border-gray-800 pt-4 mt-4">
            <p>&copy; {new Date().getFullYear()} Protect Armour. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}