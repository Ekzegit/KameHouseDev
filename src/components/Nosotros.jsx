import { motion } from "framer-motion";

function Nosotros() {
    return (
        <motion.section
            id="nosotros"
            className="bg-white text-azulDB py-20 px-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre nosotros</h2>
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                    En <strong>KameHouseDev</strong> desarrollamos sitios web y sistemas personalizados para empresas, emprendimientos y profesionales que buscan destacar en el entorno digital.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                    Nos enfocamos en combinar diseño atractivo con tecnología moderna, creando soluciones funcionales, eficientes y alineadas con los objetivos de cada cliente.
                </p>
            </div>
        </motion.section>
    );
}

export default Nosotros;
