'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic for authentication can be added here
    router.push('/temas/tema4');
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-white to-blue-500">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-700">
            Já tem conta? <Link href="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
          </p>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              id="email"
              className="w-full p-4 pl-12 rounded-full bg-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
            <span className="absolute left-4 top-4 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12c1.333 0 2-1 2-2s-.667-2-2-2M8 12c-1.333 0-2-1-2-2s.667-2 2-2" />
              </svg>
            </span>
          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              className="w-full p-4 pl-12 rounded-full bg-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Senha"
            />
            <span className="absolute left-4 top-4 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12v4m0 0v4m0-4h4m-4 0H2" />
              </svg>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                Lembre de mim
              </label>
            </div>
            <div className="text-sm">
              <Link href="/forgot-password" className="font-medium text-blue-600 hover:underline">
                Esqueceu a senha?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-4 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
