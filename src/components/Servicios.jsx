import { motion } from "framer-motion";

function Servicios() {
    return (
        <motion.section
            id="servicios"
            className="relative min-h-[60vh] text-white py-28 px-6 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/src/assets/kame_servicios.png')",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {/* Capa oscura */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Contenido */}
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Servicios
                </motion.h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {[
                        {
                            titulo: "Desarrollo Web",
                            descripcion:
                                "Sitios modernos, adaptativos y rápidos para impulsar tu presencia online.",
                        },
                        {
                            titulo: "Sistemas a Medida",
                            descripcion:
                                "Automatiza tareas con plataformas diseñadas especialmente para tu negocio.",
                        },
                        {
                            titulo: "Asesoría Digital",
                            descripcion:
                                "Te acompaño en la elección de herramientas y estrategias para crecer online.",
                        },
                    ].map((servicio, index) => (
                        <motion.div
                            key={index}
                            className="p-6 w-[280px] md:w-[300px] rounded-xl bg-white/20 text-white backdrop-blur-md shadow-md hover:shadow-xl transition"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg font-semibold mb-2">{servicio.titulo}</h3>
                            <p className="text-sm">{servicio.descripcion}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default Servicios;
