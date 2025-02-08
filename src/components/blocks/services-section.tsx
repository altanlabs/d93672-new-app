import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Protección UV",
    description: "Protección contra los dañinos rayos ultravioleta que pueden decolorar y dañar la superficie de su embarcación.",
    icon: "☀️"
  },
  {
    title: "Resistencia a Rayones",
    description: "Película protectora que actúa como escudo contra rayones y pequeños impactos.",
    icon: "🛡️"
  },
  {
    title: "Fácil Mantenimiento",
    description: "Superficie que facilita la limpieza y mantiene el aspecto original de su embarcación.",
    icon: "✨"
  },
  {
    title: "Durabilidad",
    description: "Protección duradera que mantiene el valor y la apariencia de su inversión.",
    icon: "⭐"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" id="servicios">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="transform hover:scale-105 transition-transform duration-300 dark:bg-gray-800 border-none shadow-lg">
              <CardHeader>
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <CardTitle className="text-xl text-center dark:text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};