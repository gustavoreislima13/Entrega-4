'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useState, useEffect } from 'react';

const API_URL = 'https://api-seu-backend.com'; // Substitua pela URL da sua API

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // Fetch initial data from API
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/contacts`);
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Erro ao buscar contatos:', error);
      }
    };

    fetchData();
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      const updatedMessages = [...chatMessages, { sender: 'Você', message: newMessage }];
      setChatMessages(updatedMessages);

      // Envia a mensagem para a API
      try {
        await fetch(`${API_URL}/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message: newMessage })
        });
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
      }

      setNewMessage('');
    }
  };

  const addContact = async () => {
    const newContact = { name: 'Novo Contato', image: '/user-icon-default.png' };
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);

    // Adiciona o novo contato na API
    try {
      await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newContact)
      });
    } catch (error) {
      console.error('Erro ao adicionar contato:', error);
    }
  };

  const removeContact = async (index: number) => {
    const contactToRemove = contacts[index];
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);

    // Remove o contato da API
    try {
      await fetch(`${API_URL}/contacts/${contactToRemove.name}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('Erro ao remover contato:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Conteúdo Principal */}
      <main className={`flex-1 p-4 md:p-6 grid grid-cols-1 lg:grid-cols-4 gap-4 ml-auto transition-opacity duration-300 ${isSidebarOpen ? 'opacity-50 pointer-events-none lg:pointer-events-auto lg:opacity-100' : ''}`}>
        <div className="lg:col-span-3">
          {/* Análise e Gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
              <h2 className="text-lg font-bold mb-2 text-white">Chat com IA - Diagnóstico do Carro</h2>
              <div className="h-72 overflow-y-auto border rounded-lg p-4 bg-gray-900">
                {/* Simulação de Chat com IA */}
                <div className="space-y-2">
                  {chatMessages.map((message, index) => (
                    <div key={index} className={`p-2 rounded-md ${message.sender === 'Você' ? 'bg-gray-700' : 'bg-blue-700'}`}>
                      <strong className="text-white">{message.sender}:</strong> <span className="text-white">{message.message}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex">
                <input
                  type="text"
                  className="flex-1 rounded-md border-gray-600 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm mr-2"
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
            <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
              <h2 className="text-lg font-bold mb-2 text-white">Agendar Serviço</h2>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="bg-gray-800 p-4 rounded-xl shadow-lg flex-1">
                  <h3 className="text-lg font-bold mb-2 text-white">Detalhes do Agendamento</h3>
                  <form className="space-y-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-300">Localização</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-600 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Insira sua localização"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300">Detalhes Adicionais</label>
                      <textarea
                        className="mt-1 block w-full rounded-md border-gray-600 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Quaisquer detalhes adicionais"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300">Escolha a Máquina Mais Perto de Mim</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-600 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Digite para encontrar máquinas próximas"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300">Sugestão IA</label>
                      <textarea
                        className="mt-1 block w-full rounded-md border-gray-600 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Sugestões baseadas em IA"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300">Data</label>
                      <input
                        type="date"
                        className="mt-1 block w-full rounded-md border-gray-600 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
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
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg mt-4">
            <h2 className="text-lg font-bold mb-4 text-white">Lista de Pedidos</h2>
            <table className="min-w-full bg-gray-900 text-sm text-white">
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
                  <tr key={index} className="border-t border-gray-700">
                    <td className="py-2">{orderId}</td>
                    <td className="py-2">Usuário {index + 1}</td>
                    <td className="py-2">Projeto {index + 1}</td>
                    <td className="py-2">Data {index + 1}</td>
                    <td className="py-2">{index % 2 === 0 ? 'Em Progresso' : 'Concluído'}</td>
                    <td className="py-2">
                      <button className="text-blue-400 mr-2">Editar</button>
                      <button className="text-red-400">Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Seção de Notificações, Atividades e Contatos */}
        <div className="lg:col-span-1 grid grid-cols-1 gap-4 mt-6">
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
            <h2 className="text-base font-bold mb-2 text-white">Notificações</h2>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-white">
                <span>Novo usuário registrado.</span>
                <span className="text-gray-400 ml-auto">59 minutos atrás</span>
              </li>
              <li className="flex items-center text-sm text-white">
                <span>Você corrigiu um bug.</span>
                <span className="text-gray-400 ml-auto">Agora mesmo</span>
              </li>
              <li className="flex items-center text-sm text-white">
                <span>Você corrigiu um bug.</span>
                <span className="text-gray-400 ml-auto">12 horas atrás</span>
              </li>
              <li className="flex items-center text-sm text-white">
                <span>Andi Lane se inscreveu.</span>
                <span className="text-gray-400 ml-auto">Hoje, 11:59 AM</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
            <h2 className="text-base font-bold mb-2 text-white">Atividades Recentes</h2>
            <div className="h-60 rounded-md overflow-hidden mb-4">
              {/* Mapa inserido aqui */}
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.633308%2C-23.55052%2C-46.625290%2C-23.545428&layer=mapnik"
                className="w-full h-full border rounded-lg"
              ></iframe>
            </div>
            <form className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-300">Localização</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Insira sua localização"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Detalhes Adicionais</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-600 bg-gray-900 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Quaisquer detalhes adicionais"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md">
                Enviar Solicitação
              </button>
            </form>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
            <h2 className="text-base font-bold mb-2 text-white">Contatos</h2>
            <ul className="space-y-2">
              {contacts.map((contact, index) => (
                <li key={index} className="flex items-center text-sm border border-gray-700 rounded-full p-2">
                  <Image src={contact.image} alt="" width={24} height={24} className="rounded-full mr-2" />
                  <span className="text-white">{contact.name}</span>
                  <button onClick={() => removeContact(index)} className="ml-auto text-red-400">X</button>
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
