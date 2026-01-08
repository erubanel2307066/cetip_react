import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight, Code, Database, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary-900">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500 blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600 blur-[120px]" />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-accent-yellow text-sm font-medium mb-6">
                        <Sparkles size={16} />
                        <span>Inscripciones Abiertas 2026</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6">
                        Domina el <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-yellow to-yellow-200">Futuro Digital</span>
                    </h1>

                    <p className="text-xl text-blue-100 mb-8 max-w-lg font-light leading-relaxed">
                        Formación técnica integral en Programación, Análisis de Sistemas y Diseño. Tu puerta de entrada al mundo tecnológico.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button href="#contacto" variant="secondary" className="group">
                            Inicia tu Inscripción <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white">
                            <a href="#cursos">Ver Plan de Estudios</a>
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative lg:h-[600px] flex items-center justify-center"
                >
                    <div className="relative w-full aspect-square max-w-[500px]">
                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute top-10 left-10 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl z-20"
                        >
                            <Code size={40} className="text-accent-yellow" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 right-10 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl z-20"
                        >
                            <Database size={40} className="text-green-400" />
                        </motion.div>

                        {/* Main Visual */}
                        <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-full border border-white/10 backdrop-blur-sm flex items-center justify-center p-8 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <img
                                src="/img/logo.jpg"
                                alt="CETIP Tech"
                                className="w-[80%] h-[80%] object-contain drop-shadow-2xl rounded-3xl"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
