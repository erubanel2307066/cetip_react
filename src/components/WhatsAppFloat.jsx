import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppFloat() {
    const CETIP_PHONE_NUMBER = '+527443716384';
    const WHATSAPP_MESSAGE = encodeURIComponent('Hola CETIP, estoy interesado(a) en la carrera de Técnico Programador Analista de Sistemas.');
    const WHATSAPP_LINK = `https://wa.me/${CETIP_PHONE_NUMBER.replace('+', '')}?text=${WHATSAPP_MESSAGE}`;

    return (
        <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-green-500/40 hover:scale-110 transition-all duration-300 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ y: -5 }}
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={32} fill="white" className="text-white" />
        </motion.a>
    );
}
