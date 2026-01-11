import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        matricula: '',
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Lógica de registro eliminada
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => navigate('/login'), 2000);
        }, 1500);
    };

    return (
        <div className="min-h-screen pt-20 pb-12 flex items-center justify-center relative overflow-hidden bg-primary-900 px-4">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/img/fondo_prinicipal.png"
                    alt="Background"
                    className="w-full h-full object-cover object-top sm:object-center opacity-30 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-900/80 to-primary-900/40" />
            </div>

            <div className="w-full max-w-md relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden"
                >
                    <div className="p-8 sm:p-12">
                        <div className="text-center mb-10">
                            <h1 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">
                                Crear Cuenta
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400">
                                Únete a la comunidad CETIP
                            </p>
                            {error && (
                                <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
                                    {error}
                                </div>
                            )}
                            {success && (
                                <div className="mt-4 p-3 bg-green-50 text-green-600 text-sm rounded-xl border border-green-100">
                                    ¡Registro exitoso! Revisa tu correo para confirmar (si está habilitado). Redirigiendo...
                                </div>
                            )}
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Matricula Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                    Matrícula
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        name="matricula"
                                        required
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                        placeholder="Tu número de matrícula"
                                        value={formData.matricula}
                                        onChange={handleChange}
                                    />
                                </div>
                                <p className="mt-1 text-xs text-gray-500">Dato para control interno.</p>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                    Correo Electrónico
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                        placeholder="ejemplo@correo.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                                    Contraseña
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        required
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <Button type="submit" className="w-full group">
                                Registrarse
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </form>

                        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                            ¿Ya tienes una cuenta?{' '}
                            <Link to="/login" className="font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors">
                                Inicia sesión
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
