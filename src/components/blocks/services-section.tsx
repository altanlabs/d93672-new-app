import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Protección UV",
    description: "Protección contra los dañinos rayos ultravioleta que pueden decolorar y dañar la superficie de su embarcación."
  },
  {
    title: "Resistencia a Rayones",
    description: "Película protectora que actúa como escudo contra rayones y pequeños impactos."
  },
  {
    title: "Fácil Mantenimiento",
    description: "Superficie que facilita la limpieza y mantiene el aspecto original de su embarcación."
  },
  {
    title: "Durabilidad",
    description: "Protección duradera que mantiene el valor y la apariencia de su inversión."
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="servicios">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-xl dark:text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};