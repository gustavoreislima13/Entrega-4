import Image from 'next/image';
import Link from 'next/link';

export default function Menu() {
  return (
    
      <ul className="flex space-x-8">
        <li><Link href="/" className="text-white text-xl hover:text-gray-200">Home</Link></li>
        <li><Link href="/temas/tema1" className="text-white text-xl hover:text-gray-200">Serviços</Link></li>
        <li><Link href="/temas/tema2" className="text-white text-xl hover:text-gray-200">Contato</Link></li>
        <li><Link href="/temas/tema3" className="text-white text-xl hover:text-gray-200">Login</Link></li>
              </ul>
  );
}
