import { motion } from "framer-motion";
import {
    FaCheckCircle,
    FaCode,
    FaHandshake,
    FaRocket,
    FaClock,
    FaUserShield,
} from "react-icons/fa";

function Valores() {
    const valores = [
        {
            icon: <FaHandshake className="text-3xl text-naranjaDB mb-3" />,
            titulo: "Compromiso",
            texto: "Asumimos cada proyecto como propio, con enfoque total en resultados.",
        },
        {
            icon: <FaCode className="text-3xl text-naranjaDB mb-3" />,
            titulo: "Calidad técnica",
            texto: "Aplicamos buenas prácticas de desarrollo para soluciones robustas.",
        },
        {
            icon: <FaCheckCircle className="text-3xl text-naranjaDB mb-3" />,
            titulo: "Cercanía",
            texto: "Nos comunicamos de forma clara, directa y cercana con nuestros clientes.",
        },
        {
            icon: <FaRocket className="text-3xl text-naranjaDB mb-3" />,
            titulo: "Innovación",
            texto: "Utilizamos tecnologías modernas para generar soluciones efectivas.",
        },
        {
            icon: <FaClock className="text-3xl text-naranjaDB mb-3" />,
            titulo: "Responsabilidad",
            texto: "Cumplimos con plazos, entregas y expectativas de manera profesional.",
        },
        {
            icon: <FaUserShield className="text-3xl text-naranjaDB mb-3" />,
            titulo: "Confianza",
            texto: "Construimos relaciones sólidas y duraderas basadas en transparencia y ética.",
        },
    ];

    return (
        <motion.section
            className="bg-naranjaDB text-azulDB py-20 px-6 text-center"
            id="valores"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Nuestros valores</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {valores.map((valor, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow hover:shadow-md transition"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            {valor.icon}
                            <h3 className="text-xl font-semibold mb-2">{valor.titulo}</h3>
                            <p className="text-sm">{valor.texto}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default Valores;
