import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex justify-between items-start p-8 bg-white w-full border-t border-gray-200">
      <div className="flex-1">
        <Image src="/porto_seguro_logo.png" alt="" width={50} height={50} />
        <p className="mt-4 text-gray-800 max-w-xs">
          Conte com todo nosso cuidado também, cartões e serviços Porto em um só lugar de forma rápida e segura. Baixe agora!
        </p>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Rede social</h3>
        <ul className="text-gray-800 space-y-2">
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Site</li>
          <li>Whatsapp</li>
        </ul>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Paginas</h3>
        <ul className="text-gray-800 space-y-2">
          <li>Home</li>
          <li>Menu</li>
          <li>Serviços</li>
          <li>Contato</li>
        </ul>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Rm dos alunos</h3>
        <ul className="text-gray-800 space-y-2">
          <li>556857</li>
          <li>555672</li>
          <li>555708</li>
        </ul>
      </div>
    </footer>
  );
}
