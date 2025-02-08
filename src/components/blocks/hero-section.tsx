import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative hero-pattern text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-800/80 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Protect Armour
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            Protección superior para su embarcación con Marine Protection Film
          </p>
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white animate-fade-in-delay-2"
            onClick={() => {
              const element = document.getElementById('contacto');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Solicitar Presupuesto
          </Button>
        </div>
      </div>
    </div>
  );
};