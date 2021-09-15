import { motion } from 'framer-motion';
import useWindowDimensions from './hooks/useWindowDimensions';

export default function Navbar() {
    const { width } = useWindowDimensions();

    return (
        <div className="bg-green-600 h-16 flex items-center px-16">
            <motion.h1 
                className={ width > 800 ? "text-gray-100 text-4xl italic" : "text-gray-100 text-2xl italic"}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 3 }}
            >Andre's Lawn Care</motion.h1>
        </div>
    )
}
