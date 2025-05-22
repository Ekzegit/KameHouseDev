import { motion } from "framer-motion";
import { useState } from "react";

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("¡Mensaje enviado (aún sin backend)!");
        // Aquí iría el envío real por EmailJS, Formspree, etc.
        setFormData({ nombre: "", correo: "", mensaje: "" });
    };

    return (
        <motion.section
            id="contacto"
            className="bg-azulDB text-white py-20 px-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="max-w-xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h2>
                <p className="text-lg mb-8">¿Tienes un proyecto o una idea? ¡Escríbenos!</p>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div>
                        <label className="block mb-1">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md text-azulDB"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Correo electrónico</label>
                        <input
                            type="email"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md text-azulDB"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Mensaje</label>
                        <textarea
                            name="mensaje"
                            rows="4"
                            value={formData.mensaje}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md text-azulDB"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-naranjaDB text-white px-6 py-2 rounded-full hover:bg-white hover:text-naranjaDB transition"
                    >
                        Enviar mensaje
                    </button>
                </form>
            </div>
        </motion.section>
    );
}

export default Contacto;
