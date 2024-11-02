'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';

const Dashboard: FC = () => {
  const [contacts, setContacts] = useState([
    { name: 'John Doe', image: '/user-icon1.png' },
    { name: 'Jane Smith', image: '/user-icon2.png' }
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const addContact = () => {
    setContacts([...contacts, { name: 'New Contact', image: '/user-icon-default.png' }]);
  };

  const removeContact = (index: number) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };
  const router = useRouter();
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className={`flex-1 p-4 md:p-6 grid grid-cols-1 lg:grid-cols-4 gap-4 ml-auto transition-opacity duration-300 ${isSidebarOpen ? 'opacity-50 pointer-events-none lg:pointer-events-auto lg:opacity-100' : ''}`}>
        <button className="lg:hidden p-2 text-blue-600 bg-white shadow-md rounded-md mb-4" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? 'Close' : 'Open'} Menu
        </button>
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Summary Cards */}
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-base font-bold">New Policies</h3>
              <p className="text-2xl font-bold">1,254</p>
              <p className="text-green-500 mt-1 text-sm">+8.5%</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-base font-bold">Claims Filed</h3>
              <p className="text-2xl font-bold">367</p>
              <p className="text-red-500 mt-1 text-sm">-1.2%</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-base font-bold">Renewals</h3>
              <p className="text-2xl font-bold">932</p>
              <p className="text-green-500 mt-1 text-sm">+4.3%</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="text-base font-bold">Pending Claims</h3>
              <p className="text-2xl font-bold">108</p>
              <p className="text-orange-500 mt-1 text-sm">+2.1%</p>
            </div>
          </div>

          {/* Graph and Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h2 className="text-lg font-bold mb-2">Select Date</h2>
              <div className="flex justify-center items-center">
                <div className="h-full w-full">
                  <input type="date" className="w-auto rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h2 className="text-lg font-bold mb-2">Schedule Service</h2>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="bg-white p-4 rounded-xl shadow-md flex-1">
                  <h3 className="text-lg font-bold mb-2">Select Date</h3>
                  <div className="h-72">
                    {/* Calendar Component Removed */}
                    <div className="h-full w-full border rounded-lg p-4">
                      <input type="date" className="w-full h-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md flex-1">
                  <h3 className="text-lg font-bold mb-2">Appointment Details</h3>
                  <form className="space-y-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Location</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Enter your location"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Additional Details</label>
                      <textarea
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Any additional details"
                      ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md">
                      Schedule Appointment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Order List Section */}
          <div className="bg-white p-4 rounded-xl shadow-md mt-4">
            <h2 className="text-lg font-bold mb-4">Order List</h2>
            <table className="min-w-full bg-white text-sm">
              <thead>
                <tr>
                  <th className="py-2 text-left">Order ID</th>
                  <th className="py-2 text-left">User</th>
                  <th className="py-2 text-left">Project</th>
                  <th className="py-2 text-left">Date</th>
                  <th className="py-2 text-left">Status</th>
                  <th className="py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {['#CMP801', '#CMP802', '#CMP803', '#CMP804', '#CMP805'].map((orderId, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-2">{orderId}</td>
                    <td className="py-2">User {index + 1}</td>
                    <td className="py-2">Project {index + 1}</td>
                    <td className="py-2">Date {index + 1}</td>
                    <td className="py-2">Status {index % 2 === 0 ? 'In Progress' : 'Complete'}</td>
                    <td className="py-2">
                      <button className="text-blue-600 mr-2">Edit</button>
                      <button className="text-red-600">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notifications, Activities, and Contacts Section */}
        <div className="lg:col-span-1 grid grid-cols-1 gap-4 mt-6">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-base font-bold mb-2">Notifications</h2>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <span>New user registered.</span>
                <span className="text-gray-500 ml-auto">59 minutes ago</span>
              </li>
              <li className="flex items-center text-sm">
                <span>You fixed a bug.</span>
                <span className="text-gray-500 ml-auto">Just now</span>
              </li>
              <li className="flex items-center text-sm">
                <span>You fixed a bug.</span>
                <span className="text-gray-500 ml-auto">12 hours ago</span>
              </li>
              <li className="flex items-center text-sm">
                <span>Andi Lane subscribed.</span>
                <span className="text-gray-500 ml-auto">Today, 11:59 AM</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-base font-bold mb-2">Recent Activities</h2>
            <div className="h-60 rounded-md overflow-hidden mb-4">
              {/* Mapa inserido aqui */}
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.633308%2C-23.55052%2C-46.625290%2C-23.545428&layer=mapnik"
                className="w-full h-full border rounded-lg"
              ></iframe>
            </div>
            <form className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your location"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Additional Details</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Any additional details"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md">
                Submit Request
              </button>
            </form>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-base font-bold mb-2">Contacts</h2>
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
              Add Contact
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
