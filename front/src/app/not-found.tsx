import Image from 'next/image';
import { ImagemSelecionada } from '@/app/types';

export default async function NotFound() {
  const response = await fetch(`http://localhost:3000/api`);
  const imagens = await response.json();
  const imagem:ImagemSelecionada = imagens.find((img:ImagemSelecionada) => img.id == 5)
  
  return (
    <div className="bg-sky-600 flex flex-col items-center justify-center min-h-screen text-gray-100 p-6">
      <div>
        <Image
          src={imagem.img} 
          alt="Ilustração de erro"
          width={600} 
          height={400}
          />
      </div>
    </div>
    )
  }