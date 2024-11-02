import Layout from '../layout';

export default async function tema3() {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-white to-blue-500">
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contato</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-semibold text-gray-900 mb-2">Nome</label>
              <input type="text" id="name" className="border border-blue-500 p-2 rounded" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold text-gray-900 mb-2">Email</label>
              <input type="email" id="email" className="border border-blue-500 p-2 rounded" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-lg font-semibold text-gray-900 mb-2">Celular</label>
              <input type="tel" id="phone" className="border border-blue-500 p-2 rounded" />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="message" className="text-lg font-semibold text-gray-900 mb-2">Mensagem</label>
              <textarea id="message" className="border border-blue-500 p-2 rounded h-32"></textarea>
            </div>
            <div className="flex justify-center col-span-2">
              <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-500 transition duration-200">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
