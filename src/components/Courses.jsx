import { FileText, Cpu, Database, Palette, CheckCircle2 } from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';

const courses = [
    {
        title: "Ofimática y Productividad",
        description: "Domina Microsoft Office para la gestión administrativa eficiente.",
        icon: FileText,
        color: "blue",
        features: ["Word y PowerPoint Pro", "Excel Avanzado", "Gestión de Access", "Herramientas Digitales"]
    },
    {
        title: "Lógica y Programación",
        description: "Desarrolla el pensamiento lógico y crea tus primeros algoritmos.",
        icon: Cpu,
        color: "yellow",
        features: ["Algoritmos Estructurados", "Fundamentos de Código", "Estructuras de Datos", "Integración de Sistemas"]
    },
    {
        title: "Bases de Datos",
        description: "Diseña y gestiona sistemas de información robustos.",
        icon: Database,
        color: "green",
        features: ["Modelado de Datos", "Consultas SQL", "Análisis de Requisitos", "Integración Office"]
    },
    {
        title: "IA y Diseño Digital",
        description: "Potencia tu creatividad con IA y herramientas Adobe.",
        icon: Palette,
        color: "red",
        features: ["IA para Educación", "Photoshop Básico", "Illustrator Vectorial", "Material Didáctico"]
    }
];

const colorMap = {
    blue: "text-blue-600 border-blue-500",
    yellow: "text-amber-500 border-amber-400",
    green: "text-emerald-600 border-emerald-500",
    red: "text-red-500 border-red-500"
};

const bgMap = {
    blue: "bg-blue-50",
    yellow: "bg-amber-50",
    green: "bg-emerald-50",
    red: "bg-red-50"
};

export default function Courses() {
    return (
        <section id="cursos" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros <span className="text-primary-700">Programas</span></h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Los 4 pilares fundamentales para formarte como un Técnico Programador Analista completo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {courses.map((course, index) => (
                        <Card key={index} className={`border-t-4 ${colorMap[course.color].split(' ')[1]} flex flex-col`}>
                            <div className={`w-12 h-12 rounded-xl ${bgMap[course.color]} flex items-center justify-center mb-6`}>
                                <course.icon className={`w-6 h-6 ${colorMap[course.color].split(' ')[0]}`} />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                            <p className="text-gray-500 text-sm mb-6 flex-grow">{course.description}</p>

                            <ul className="space-y-3 mb-8">
                                {course.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                        <CheckCircle2 size={16} className="mt-0.5 text-primary-600 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button href="#contacto" variant="outline" className="w-full text-sm py-2">
                                Ver Temario
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
