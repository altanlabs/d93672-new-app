import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Protect Armour
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Protección superior para su embarcación con Marine Protection Film
          </p>
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white"
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