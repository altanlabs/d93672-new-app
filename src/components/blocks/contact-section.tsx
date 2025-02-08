import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export const ContactSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800" id="contacto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Contacta con Nosotros
        </h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Nombre
                    </label>
                    <Input placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Email
                    </label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    Mensaje
                  </label>
                  <Textarea
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="min-h-[150px]"
                  />
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
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