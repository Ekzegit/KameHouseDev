import { motion } from "framer-motion";
import { useRef, useState } from "react";

function Contacto() {
    const formRef = useRef();

    const [formData, setFormData] = useState({
        nombre: "",
        correo: "",
        mensaje: "",
    });

    const [errores, setErrores] = useState({});
    const [enviando, setEnviando] = useState(false);

    const validar = () => {
        const erroresTemp = {};

        if (!formData.nombre.trim()) {
            erroresTemp.nombre = "El nombre es obligatorio.";
        }

        if (!formData.correo.trim()) {
            erroresTemp.correo = "El correo es obligatorio.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
            erroresTemp.correo = "El correo no es válido.";
        }

        if (!formData.mensaje.trim()) {
            erroresTemp.mensaje = "El mensaje es obligatorio.";
        }

        return erroresTemp;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrores({ ...errores, [e.target.name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const erroresDetectados = validar();

        if (Object.keys(erroresDetectados).length > 0) {
            setErrores(erroresDetectados);
            return;
        }

        setEnviando(true);
        formRef.current.submit();
        alert("¡Gracias! Tu mensaje ha sido enviado.");
        setFormData({ nombre: "", correo: "", mensaje: "" });
        setErrores({});
        setEnviando(false);
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

                <form
                    ref={formRef}
                    action="https://formsubmit.co/contacto@kamehousedev.cl"
                    method="POST"
                    target="_blank"
                    className="space-y-4 text-left"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="_captcha" value="false" />

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
                        {errores.nombre && (
                            <p className="text-red-300 text-sm mt-1">{errores.nombre}</p>
                        )}
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
                        {errores.correo && (
                            <p className="text-red-300 text-sm mt-1">{errores.correo}</p>
                        )}
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
                        {errores.mensaje && (
                            <p className="text-red-300 text-sm mt-1">{errores.mensaje}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={enviando}
                        className={`${enviando
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-naranjaDB hover:bg-white hover:text-naranjaDB"
                            } text-white px-6 py-2 rounded-full transition`}
                    >
                        {enviando ? "Enviando..." : "Enviar mensaje"}
                    </button>
                </form>
            </div>
        </motion.section>
    );
}

export default Contacto;
