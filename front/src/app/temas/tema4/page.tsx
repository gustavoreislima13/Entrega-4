'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';

const Dashboard: FC = () => {
  const [contacts, setContacts] = useState([
    { name: 'João Silva', image: '/user-icon1.png' },
    { name: 'Maria Souza', image: '/user-icon2.png' }
  ]);

  const [chatMessages, setChatMessages] = useState([
    { sender: 'Você', message: 'Meu carro está fazendo um barulho estranho.' },
    { sender: 'IA', message: 'Pode descrever melhor o barulho? Parece um som metálico ou um rangido?' },
    { sender: 'Você', message: 'Parece um som metálico, especialmente quando eu acelero.' },
    { sender: 'IA', message: 'Isso pode ser causado por um problema na correia do alternador ou no sistema de exaustão. Recomendo verificar essas partes.' }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setChatMessages([...chatMessages, { sender: 'Você', message: newMessage }]);
      setNewMessage('');
    }
  };

  const addContact = () => {
    setContacts([...contacts, { name: 'Novo Contato', image: '/user-icon-default.png' }]);
  };

  const removeContact = (index: number) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };
  const router = useRouter();
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Conteúdo Principal */}
      <main className={`flex-1 p-4 md:p-6 grid grid-cols-1 lg:grid-cols-4 gap-4 ml-auto transition-opacity duration-300 ${isSidebarOpen ? 'opacity-50 pointer-events-none lg:pointer-events-auto lg:opacity-100' : ''}`}>
        <button className="lg:hidden p-2 text-blue-600 bg-white shadow-md rounded-md mb-4" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? 'Fechar' : 'Abrir'} Menu
        </button>
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Cartões Resumo */}
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-base font-bold">Novas Apólices</h3>
              <p className="text-2xl font-bold">1.254</p>
              <p className="text-green-500 mt-1 text-sm">+8,5%</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-base font-bold">Reivindicações Feitas</h3>
              <p className="text-2xl font-bold">367</p>
              <p className="text-red-500 mt-1 text-sm">-1,2%</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-base font-bold">Renovações</h3>
              <p className="text-2xl font-bold">932</p>
              <p className="text-green-500 mt-1 text-sm">+4,3%</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-base font-bold">Reivindicações Pendentes</h3>
              <p className="text-2xl font-bold">108</p>
              <p className="text-orange-500 mt-1 text-sm">+2,1%</p>
            </div>
          </div>

          {/* Análise e Gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h2 className="text-lg font-bold mb-2">Chat com IA - Diagnóstico do Carro</h2>
              <div className="h-72 overflow-y-auto border rounded-lg p-4">
                {/* Simulação de Chat com IA */}
                <div className="space-y-2">
                  {chatMessages.map((message, index) => (
                    <div key={index} className={`p-2 rounded-md ${message.sender === 'Você' ? 'bg-gray-100' : 'bg-blue-100'}`}>
                      <strong>{message.sender}:</strong> {message.message}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex">
                <input
                  type="text"
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm mr-2"
                  placeholder="Digite sua mensagem..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md"
                >
                  Enviar
                </button>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h2 className="text-lg font-bold mb-2">Agendar Serviço</h2>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="bg-white p-4 rounded-xl shadow-md flex-1">
                  <h3 className="text-lg font-bold mb-2">Detalhes do Agendamento</h3>
                  <form className="space-y-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Localização</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Insira sua localização"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Detalhes Adicionais</label>
                      <textarea
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Quaisquer detalhes adicionais"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Escolha a Máquina Mais Perto de Mim</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Digite para encontrar máquinas próximas"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Sugestão IA</label>
                      <textarea
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Sugestões baseadas em IA"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Data</label>
                      <input
                        type="date"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md">
                      Agendar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Seção da Lista de Pedidos */}
          <div className="bg-white p-4 rounded-xl shadow-md mt-4">
            <h2 className="text-lg font-bold mb-4">Lista de Pedidos</h2>
            <table className="min-w-full bg-white text-sm">
              <thead>
                <tr>
                  <th className="py-2 text-left">ID do Pedido</th>
                  <th className="py-2 text-left">Usuário</th>
                  <th className="py-2 text-left">Projeto</th>
                  <th className="py-2 text-left">Data</th>
                  <th className="py-2 text-left">Status</th>
                  <th className="py-2 text-left">Ações</th>
                </tr>
              </thead>
              <tbody>
                {['#CMP801', '#CMP802', '#CMP803', '#CMP804', '#CMP805'].map((orderId, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-2">{orderId}</td>
                    <td className="py-2">Usuário {index + 1}</td>
                    <td className="py-2">Projeto {index + 1}</td>
                    <td className="py-2">Data {index + 1}</td>
                    <td className="py-2">{index % 2 === 0 ? 'Em Progresso' : 'Concluído'}</td>
                    <td className="py-2">
                      <button className="text-blue-600 mr-2">Editar</button>
                      <button className="text-red-600">Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Seção de Notificações, Atividades e Contatos */}
        <div className="lg:col-span-1 grid grid-cols-1 gap-4 mt-6">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-base font-bold mb-2">Notificações</h2>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <span>Novo usuário registrado.</span>
                <span className="text-gray-500 ml-auto">59 minutos atrás</span>
              </li>
              <li className="flex items-center text-sm">
                <span>Você corrigiu um bug.</span>
                <span className="text-gray-500 ml-auto">Agora mesmo</span>
              </li>
              <li className="flex items-center text-sm">
                <span>Você corrigiu um bug.</span>
                <span className="text-gray-500 ml-auto">12 horas atrás</span>
              </li>
              <li className="flex items-center text-sm">
                <span>Andi Lane se inscreveu.</span>
                <span className="text-gray-500 ml-auto">Hoje, 11:59 AM</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-base font-bold mb-2">Atividades Recentes</h2>
            <div className="h-60 rounded-md overflow-hidden mb-4">
              {/* Mapa inserido aqui */}
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.633308%2C-23.55052%2C-46.625290%2C-23.545428&layer=mapnik"
                className="w-full h-full border rounded-lg"
              ></iframe>
            </div>
            <form className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Localização</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Insira sua localização"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Detalhes Adicionais</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Quaisquer detalhes adicionais"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md">
                Enviar Solicitação
              </button>
            </form>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-base font-bold mb-2">Contatos</h2>
            <ul className="space-y-2">
              {contacts.map((contact, index) => (
                <li key={index} className="flex items-center text-sm border rounded-full p-2">
                  <Image src={contact.image} alt="" width={24} height={24} className="rounded-full mr-2" />
                  <span>{contact.name}</span>
                  <button onClick={() => removeContact(index)} className="ml-auto text-red-600">X</button>
                </li>
              ))}
            </ul>
            <button onClick={addContact} className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md">
              Adicionar Contato
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
