export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900" id="caracteristicas">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            ¿Por qué elegir Marine Protection Film?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            La mejor protección para mantener tu embarcación como nueva
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
            <div className="text-blue-600 dark:text-blue-400 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Protección Superior</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Película de alta calidad que protege contra rayos UV, rayones y daños ambientales.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
            <div className="text-blue-600 dark:text-blue-400 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Durabilidad Garantizada</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Diseñado para durar años, manteniendo su efectividad y transparencia.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
            <div className="text-blue-600 dark:text-blue-400 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Instalación Profesional</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Equipo experto con años de experiencia en instalación de películas protectoras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};