import { motion } from 'framer-motion';
import { Award, Clock, Laptop, MonitorCheck } from 'lucide-react';
import Card from './ui/Card';

const benefits = [
    {
        icon: MonitorCheck,
        title: "100% Práctico",
        description: "Aprendizaje basado en proyectos reales desde el primer día.",
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        icon: Award,
        title: "Certificación Oficial",
        description: "Título técnico con validez oficial ante la SEP.",
        color: "text-amber-600",
        bg: "bg-amber-50"
    },
    {
        icon: Clock,
        title: "Horarios Flexibles",
        description: "Modalidades presencial, semi-presencial y online.",
        color: "text-purple-600",
        bg: "bg-purple-50"
    },
    {
        icon: Laptop,
        title: "Especialización Dual",
        description: "Domina tanto Ofimática como Programación avanzada.",
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    }
];

export default function Benefits() {
    return (
        <section id="beneficios" className="py-24 relative overflow-hidden bg-gray-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/fondo_ventajas_new.png"
                    alt="Background"
                    className="w-full h-full object-cover object-center sm:object-center opacity-90 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/80 to-gray-900" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        ¿Por qué elegir <span className="text-accent-yellow">CETIP</span>?
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Nuestra metodología está diseñada para prepararte para los retos reales del mercado laboral.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((item, index) => (
                        <Card
                            key={index}
                            className="border-white/10 bg-white/5 backdrop-blur-md shadow-2xl hover:bg-white/10 transition-all duration-300 border h-full group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 ring-1 ring-white/20 group-hover:scale-110 transition-transform`}>
                                <item.icon className={`w-7 h-7 ${item.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
