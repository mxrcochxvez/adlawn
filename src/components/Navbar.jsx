import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <div className="bg-green-600 h-16 flex items-center px-16">
            <motion.h1 
                className="text-gray-100 text-4xl"
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 3 }}
            >A&amp;D Lawn Care</motion.h1>
        </div>
    )
}
