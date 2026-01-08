import { Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-display font-bold text-white mb-4">CETIP<span className="text-accent-yellow">.</span></h3>
                        <p className="text-sm text-gray-400 mb-6">
                            Centro de Estudios Técnicos en Informática del Pacífico. Formando profesionales desde hace más de 20 años.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Enlaces</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#inicio" className="hover:text-primary-400 transition">Inicio</a></li>
                            <li><a href="#beneficios" className="hover:text-primary-400 transition">Ventajas</a></li>
                            <li><a href="#cursos" className="hover:text-primary-400 transition">Programas</a></li>
                            <li><a href="#equipo" className="hover:text-primary-400 transition">Equipo</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Contacto</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-primary-500" /> escueladecomputacion@gmail.com
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-primary-500" /> 744 371 6384
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={16} className="text-primary-500" /> Cruz Grande, Guerrero MX
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Validez</h4>
                        <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                            <p className="text-xs text-gray-400 mb-2">Incorporado a la SEP</p>
                            <p className="font-bold text-white">RVOE: 2024-C3T1P</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; 2024 CETIP. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition">Aviso de Privacidad</a>
                        <a href="#" className="hover:text-white transition">Términos y Condiciones</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
