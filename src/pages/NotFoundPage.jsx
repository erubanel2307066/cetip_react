import Button from '../components/ui/Button';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-primary-200 dark:text-primary-900">404</h1>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                        Página no encontrada
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Lo sentimos, la página que buscas no existe.
                    </p>
                </div>
            </div>

            <div className="mt-16">
                <Button to="/" className="flex items-center gap-2">
                    <Home size={20} />
                    Volver al Inicio
                </Button>
            </div>
        </div>
    );
}
