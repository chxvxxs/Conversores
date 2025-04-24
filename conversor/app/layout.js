import './globals.css';
import Navbar from './components/navbar';  // CAMINHO CORRETO!

export const metadata = {
  title: 'Conversor Universal',
  description: 'Converta moedas, temperaturas e mais!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-br from-purple-900 to-purple-700 text-white min-h-screen">
        <Navbar />
        <main className="container mx-auto p-4 pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}