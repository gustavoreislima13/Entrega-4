import Menu from '../Menu/menu';
import Image from 'next/image';

export default function Cabecalho(): JSX.Element {
  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-white to-blue-500 w-full">
      <div className="flex items-center">
        <Image src="/porto_seguro_logo.png" alt="" width={40} height={40} />
      </div>
      <div>
        <h1 className="text-black text-xl font-bold"></h1>
      </div>
      <div>
        <Menu />
      </div>
    </header>
  );
}
