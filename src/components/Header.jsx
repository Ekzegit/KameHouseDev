import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import nubeKame from "../assets/nubekame.webp";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Cerrar menú móvil al hacer scroll
    useEffect(() => {
        const closeOnScroll = () => {
            if (isOpen) setIsOpen(false);
        };
        window.addEventListener("scroll", closeOnScroll);
        return () => window.removeEventListener("scroll", closeOnScroll);
    }, [isOpen]);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // Cerrar menú móvil si está abierto
        }
    };

    const secciones = ["inicio", "nosotros", "valores", "proyectos", "servicios", "contacto"];

    return (
        <header className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo con nube animada */}
                <div className="flex items-center gap-2">
                    <motion.img
                        src={nubeKame}
                        alt="Logo animado de KameHouseDev con nube estilo Dragon Ball"
                        className="w-14 h-14 md:w-16 md:h-16"
                        animate={{ y: [0, -5, 0, 5, 0] }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <h1 className="text-2xl md:text-3xl font-bold text-azulDB">KameHouseDev</h1>
                </div>

                {/* Menú navegación */}
                <nav className="flex items-center">
                    {/* Menú escritorio */}
                    <ul className="hidden md:flex gap-6 font-medium text-azulDB">
                        {secciones.map((id) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    onClick={(e) => scrollToSection(e, id)}
                                    className="cursor-pointer hover:text-naranjaDB capitalize"
                                >
                                    {id}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Botón hamburguesa */}
                    <button
                        className="md:hidden text-azulDB text-3xl ml-4 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Abrir menú"
                        aria-expanded={isOpen}
                    >
                        ☰
                    </button>
                </nav>
            </div>

            {/* Menú móvil con animación */}
            {isOpen && (
                <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full right-4 bg-white text-azulDB rounded-md shadow-lg w-48 py-2 md:hidden z-50"
                >
                    {secciones.map((id) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                onClick={(e) => scrollToSection(e, id)}
                                className="block px-4 py-2 hover:text-naranjaDB cursor-pointer capitalize"
                            >
                                {id}
                            </a>
                        </li>
                    ))}
                </motion.ul>
            )}
        </header>
    );
}

export default Header;
