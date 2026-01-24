import { useState } from 'react';
import Button from './ui/Button';
import { Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sanitizeInput } from '../lib/security';

export default function Contact() {
    const [status, setStatus] = useState(null); // 'success', 'error', null

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = sanitizeInput(formData.get('nombre'));
        const email = sanitizeInput(formData.get('email'));
        const interest = sanitizeInput(formData.get('interes'));
        const message = sanitizeInput(formData.get('mensaje'));

        // Here you would normally send the sanitized data
        console.log('Sanitized Data:', { name, email, interest, message });

        // Simulate form submission
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(null), 5000);
    };

    return (
        <section id="contacto" className="py-16 md:py-24 bg-primary-900 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-72 h-72 md:w-[600px] md:h-[600px] bg-primary-800 rounded-full blur-[80px] md:blur-[100px] opacity-50 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-72 h-72 md:w-[600px] md:h-[600px] bg-blue-900 rounded-full blur-[80px] md:blur-[100px] opacity-50 -translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    <div className="text-white text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">¿Listo para transformar tu futuro?</h2>
                        <p className="text-base md:text-lg text-blue-200 mb-8 md:mb-12 font-light max-w-xl mx-auto lg:mx-0">
                            Déjanos tus datos y un asesor educativo te contactará en menos de 24 horas para resolver todas tus dudas.
                        </p>

                        <div className="space-y-4 md:space-y-6 max-w-lg mx-auto lg:mx-0">
                            <a href="tel:+527443716384" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition group text-left">
                                <div className="w-12 h-12 rounded-full bg-accent-yellow/20 flex items-center justify-center text-accent-yellow group-hover:scale-110 transition-transform flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs md:text-sm text-gray-400">Llámanos</p>
                                    <p className="text-lg md:text-xl font-bold">744 371 6384</p>
                                </div>
                            </a>

                            <a href="mailto:escueladecomputacion@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition group text-left">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-xs md:text-sm text-gray-400">Escríbenos</p>
                                    <p className="text-base md:text-xl font-bold truncate">cetiptecnicosinformaticos@gmail.com</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl">
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0, mb: 0 }}
                                    animate={{ opacity: 1, height: 'auto', mb: 24 }}
                                    exit={{ opacity: 0, height: 0, mb: 0 }}
                                    className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-3 overflow-hidden text-sm"
                                >
                                    <CheckCircle size={20} className="flex-shrink-0" />
                                    <span>¡Mensaje enviado! Te contactaremos pronto.</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                            <div>
                                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                                <input type="text" id="nombre" name="nombre" maxLength="100" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition text-sm md:text-base" placeholder="Juan Pérez" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                                <input type="email" id="email" name="email" maxLength="100" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition text-sm md:text-base" placeholder="juan@ejemplo.com" />
                            </div>

                            <div>
                                <label htmlFor="interes" className="block text-sm font-medium text-gray-700 mb-1">Área de Interés</label>
                                <select id="interes" name="interes" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition bg-white text-sm md:text-base">
                                    <option>Carrera: Técnico Programador Analista</option>
                                    <option>Cursos de Ofimática</option>
                                    <option>Cursos de Programación</option>
                                    <option>IA para Educadores</option>
                                    <option>Diseño Gráfico</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje (Opcional)</label>
                                <textarea id="mensaje" name="mensaje" maxLength="500" rows="3" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition text-sm md:text-base" placeholder="¿Tienen clases los sábados?"></textarea>
                            </div>

                            <Button type="submit" className="w-full py-3.5 md:py-4 text-base md:text-lg bg-primary-700 hover:bg-primary-800 mt-2">
                                Solicitar Información
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
