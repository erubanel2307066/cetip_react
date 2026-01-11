import Card from './ui/Card';

const team = [
    {
        name: "Profr. Andres Reyes Carrillo",
        role: "Director General",
        desc: "Lidera la visión estratégica con más de 20 años en educación tecnológica.",
        image: "/img/andres.png",
        fallback: "AR"
    },
    {
        name: "Profr. Erubanel Gallo Casiano",
        role: "Líder de Programación",
        desc: "Experto en Algoritmos y Desarrollo. Apasionado por la lógica de sistemas.",
        image: "/img/Erubanel.png",
        fallback: "EG"
    },
    {
        name: "Ing. Jesus Hernandez",
        role: "Especialista en BD",
        desc: "Encargado de gestión de datos y herramientas de productividad (Excel / Access).",
        image: "https://placehold.co/150x150/E5E7EB/1F2937?text=JH",
        fallback: "JH"
    },
    {
        name: "M. Especialista",
        role: "IA y Diseño Digital",
        desc: "Enfocada en potenciar la enseñanza mediante IA y herramientas creativas.",
        image: "https://placehold.co/150x150/10B981/ffffff?text=IA",
        fallback: "IA"
    }
];

export default function Team() {
    return (
        <section id="equipo" className="py-24 relative overflow-hidden bg-white">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestro <span className="text-primary-700">Equipo</span></h2>
                    <p className="text-gray-600 text-lg">Profesionales apasionados por la educación tecnológica.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <Card key={index} className="text-center group">
                            <div className="relative w-32 h-32 mx-auto mb-6">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-600 to-accent-yellow blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://ui-avatars.com/api/?name=${member.fallback}&background=0D8ABC&color=fff&size=128`;
                                    }}
                                />
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                            <p className="text-sm font-semibold text-primary-600 mb-3">{member.role}</p>
                            <p className="text-sm text-gray-500 leading-relaxed">{member.desc}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
