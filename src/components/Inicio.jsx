import { motion } from "framer-motion";

function Inicio() {
    return (
        <motion.section
            id="inicio"
            className="relative min-h-screen text-white bg-center bg-no-repeat 
             bg-cover md:bg-cover sm:bg-contain sm:bg-top"
            style={{ backgroundImage: "url('/src/assets/foto_inicio.png')" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {/* Capa oscura sobre imagen */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Contenido centrado visualmente (más arriba) */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen">
                <div className="max-w-3xl">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Bienvenido a <span className="text-amarilloDB">KameHouseDev</span>
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl leading-relaxed"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        Creamos sitios web y sistemas personalizados para ayudarte a crecer en el mundo&nbsp;digital.
                        <br />
                        Combinamos diseño funcional y tecnología moderna para ofrecer soluciones eficaces,
                        atractivas y alineadas con tus objetivos.
                    </motion.p>


                </div>
            </div>
        </motion.section>


    );
}

export default Inicio;
