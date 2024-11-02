export default function Services() {
    return (
      <section className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-white to-blue-500">
        <div className="w-full max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Serviços</h2>
          <p className="text-lg text-gray-700 mb-12">Totalmente personalizado para você!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="/plataforma_bem_estar.jpg" alt="Plataforma de Bem-Estar" className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Plataforma de Bem-Estar</h3>
              <p className="text-gray-600">By Porto Seguro | undefined</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="/previsao_riscos.jpg" alt="Previsão de Riscos" className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Previsão de Riscos</h3>
              <p className="text-gray-600">By Porto Seguro | undefined</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="/prevencao_fraudes.jpg" alt="Prevenção de Fraudes" className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-semibold text-blue-600">Prevenção de Fraudes</h3>
              <p className="text-gray-600">By Porto Seguro | undefined</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="/assistencia_juridica.jpg" alt="Assistência Jurídica" className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Assistência Jurídica</h3>
              <p className="text-gray-600">By Porto Seguro | undefined</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="/assistencia_medica.jpg" alt="Assistência Médica" className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Assistência Médica</h3>
              <p className="text-gray-600">By Porto Seguro | undefined</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="/assistente_virtual.jpg" alt="Assistente Virtual" className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Assistente Virtual</h3>
              <p className="text-gray-600">By Porto Seguro | undefined</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 transition duration-200">1</button>
            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md ml-4 hover:bg-gray-400 transition duration-200">2</button>
          </div>
        </div>
      </section>
    );
  }
  