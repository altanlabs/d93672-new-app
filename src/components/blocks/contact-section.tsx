import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se implementará la lógica del formulario
    console.log('Formulario enviado');
  };

  return (
    <section className="py-24 bg-blue-50 dark:bg-gray-800" id="contacto">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            Contacta con Nosotros
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Solicita información o un presupuesto para tu embarcación
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Nombre
                    </label>
                    <Input 
                      placeholder="Tu nombre" 
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="tu@email.com" 
                      className="w-full"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    Teléfono
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="Tu número de teléfono" 
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    Mensaje
                  </label>
                  <Textarea
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="min-h-[150px] w-full"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};