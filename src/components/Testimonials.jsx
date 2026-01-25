
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Leydi Violeta Carma",
        role: "Técnico Programador Analista de Sistemas",
        image: "/testimonials/leydi.jpg",
        text: "Descubrí que la programación es el lenguaje del futuro. En CETIP, no solo aprendí a escribir código, sino a crear soluciones que transforman realidades. Hoy me siento capaz de innovar en cualquier industria."
    },
    {
        id: 2,
        name: "Azael Luengas",
        role: "Técnico Programador Analista de Sistemas",
        image: "/testimonials/azael.jpg",
        text: "La tecnología avanza rápido y CETIP me dio las herramientas para ir un paso adelante. Desarrollar mi pensamiento lógico y analítico me ha abierto puertas que nunca imaginé. ¡El límite lo pones tú!"
    },
    {
        id: 3,
        name: "Yumairi Michell Carmona",
        role: "Técnico Programador Analista de Sistemas",
        image: "/testimonials/yumairi.jpg",
        text: "Convertirme en Analista de Sistemas cambió mi perspectiva profesional. Aquí obtuve la formación práctica y la visión estratégica para liderar proyectos tecnológicos de alto impacto. Mi futuro está en el desarrollo."
    },
    {
        id: 4,
        name: "Carlos David Lorenzo",
        role: "Técnico Programador Analista de Sistemas",
        image: "/testimonials/carlos.jpg",
        text: "Al principio tenía mis dudas, pero una vez que tomé la decisión, mi perspectiva cambió completamente. La calidad de la enseñanza y el ambiente me convencieron de que fue el camino correcto."
    },
    {
        id: 5,
        name: "Itzel Arai Carmona ",
        role: "Técnico Programador Analista de Sistemas",
        image: "/testimonials/leydi.jpg",
        text: "Descubrí que la programación es el lenguaje del futuro. En CETIP, no solo aprendí a escribir código, sino a crear soluciones que transforman realidades. Hoy me siento capaz de innovar en cualquier industria."
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-yellow/20 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-primary-600 font-semibold tracking-wider text-sm uppercase mb-2 block">
                        Nuestros Estudiantes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                        Historias de <span className="text-primary-600">Éxito en CETIP</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Descubre lo que nuestra comunidad estudiantil dice sobre su experiencia educativa y desarrollo profesional con nosotros.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative group"
                        >
                            <div className="absolute top-6 right-8 text-primary-100 group-hover:text-primary-200 transition-colors duration-300">
                                <Quote size={48} fill="currentColor" />
                            </div>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary-500 p-0.5">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 bg-accent-yellow text-white p-1 rounded-full border-2 border-white">
                                        <div className="w-2.5 h-2.5 bg-accent-yellow rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 leading-tight">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-primary-600 text-sm font-medium">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>

                            <blockquote className="text-gray-600 leading-relaxed italic relative z-10">
                                "{testimonial.text}"
                            </blockquote>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
