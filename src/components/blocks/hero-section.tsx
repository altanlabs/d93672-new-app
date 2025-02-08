import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 z-1"></div>
      
      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in drop-shadow-lg">
            Protect Armour
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay drop-shadow-md">
            Protección superior para su embarcación con Marine Protection Film
          </p>
          <p className="text-lg mb-8 animate-fade-in-delay">
            Preserva la belleza y el valor de tu embarcación con nuestra película protectora de última generación
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white animate-fade-in-delay-2 px-8 py-6 text-lg"
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