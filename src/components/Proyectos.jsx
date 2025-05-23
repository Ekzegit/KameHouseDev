import { motion } from "framer-motion";
import imgGeodesik from "../assets/geodesik.jpg";
import imgBigcleans from "../assets/bigcleans.jpg";
import imgCompraventa from "../assets/compra-venta-inmobiliaria.jpg";
import imgJuegos from "../assets/juegosantiago.png";
import imgExpertMaq from "../assets/expertmaq.png";

function Proyectos() {
    return (
        <motion.section
            id="proyectos"
            className="bg-amarilloDB text-azulDB py-20 px-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-10">Proyectos</h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Proyecto Geodesik */}
                    <motion.div
                        className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={imgGeodesik}
                            alt="Proyecto Geodesik"
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Geodesik</h3>
                        <p className="text-sm text-gray-700 text-center mb-4">
                            Sitio para empresa de fabricación de saunas y tinas de madera. Diseño visual moderno y responsivo.
                        </p>
                        <a
                            href="https://www.geodesik.cl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-naranjaDB text-white px-4 py-2 rounded-full text-sm hover:bg-azulDB transition"
                        >
                            Ver sitio
                        </a>
                    </motion.div>

                    {/* Proyecto BigCleans */}
                    <motion.div
                        className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={imgBigcleans}
                            alt="Proyecto BigCleans"
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">BigCleans</h3>
                        <p className="text-sm text-gray-700 text-center mb-4">
                            Sitio para empresa de limpieza profesional. Optimizado para SEO, mobile y campañas online.
                        </p>
                        <a
                            href="https://www.bigcleans.cl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-naranjaDB text-white px-4 py-2 rounded-full text-sm hover:bg-azulDB transition"
                        >
                            Ver sitio
                        </a>
                    </motion.div>

                    {/* Proyecto juego Santiago */}
                    <motion.div
                        className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={imgJuegos}
                            alt="Proyecto Juegos Santiago"
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Juegos Santiago</h3>
                        <p className="text-sm text-gray-700 text-center mb-4">
                            Sitio para empresa de arriendo de Juegos Inflables. Optimizado para SEO, mobile y campañas online.
                        </p>
                        <a
                            href="https://ekzegit.github.io/juegosantiago/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-naranjaDB text-white px-4 py-2 rounded-full text-sm hover:bg-azulDB transition"
                        >
                            Ver sitio
                        </a>
                    </motion.div>

                    {/* Proyecto ExpertMaq */}
                    <motion.div
                        className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={imgExpertMaq}
                            alt="Proyecto ExpertMaq"
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Juegos ExpertMaq</h3>
                        <p className="text-sm text-gray-700 text-center mb-4">
                            Sitio para empresa de maquinaria minera. Optimizado para SEO, mobile y campañas online.
                        </p>
                        <a
                            href="https://ekzegit.github.io/expertMaq/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-naranjaDB text-white px-4 py-2 rounded-full text-sm hover:bg-azulDB transition"
                        >
                            Ver sitio
                        </a>
                    </motion.div>

                    {/* Proyecto Compraventa */}
                    <motion.div
                        className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={imgCompraventa}
                            alt="Proyecto Compraventa"
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2">Sistema Compraventa</h3>
                        <p className="text-sm text-gray-700 text-center mb-4">
                            Prototipo funcional para procesos de compraventa inmobiliaria con contratos inteligentes en blockchain.
                        </p>
                        <a
                            href="#"
                            className="bg-naranjaDB text-white px-4 py-2 rounded-full text-sm hover:bg-azulDB transition"
                        >
                            Ver demo
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}

export default Proyectos;
