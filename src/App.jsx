import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import HomePage from './pages/HomePage';

import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900 selection:bg-primary-500 selection:text-white flex flex-col">
      {/* Pass location or use location inside Header to customize or hide links if needed */}
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
