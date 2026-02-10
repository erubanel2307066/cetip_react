import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Button from './ui/Button';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSignOut = () => {
        console.log('Sign out');
        navigate('/');
    };

    const navLinks = [
        { name: 'Inicio', href: '#inicio' },
        { name: 'Ventajas', href: '#beneficios' },
        { name: 'Programas', href: '#cursos' },
        { name: 'Equipo', href: '#equipo' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                        <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className={`text-2xl font-display font-extrabold transition-colors ${scrolled ? 'text-primary-900' : 'text-white'}`}>
                        CETIP<span className="text-accent-yellow">.</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                            className={`font-semibold transition-all duration-200 ${scrolled
                                ? 'text-gray-700 hover:text-primary-600'
                                : 'text-white/90 hover:text-white drop-shadow-sm'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-3">
                        <Button href="#contacto" variant="primary" className="py-2 px-5 text-sm">
                            Inscripción
                        </Button>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`md:hidden p-2 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    onClick={() => setMobileMenuOpen(false)}
                                    href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button onClick={() => setMobileMenuOpen(false)} href="#contacto" className="w-full">
                                Inscripción
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
