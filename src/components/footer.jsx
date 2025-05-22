import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-azulDB text-white text-center py-8">
            <p className="text-sm mb-2">
                © {new Date().getFullYear()} KameHouseDev. Todos los derechos reservados.
            </p>

            {/* Redes sociales */}
            <div className="flex justify-center gap-8 mt-4 text-2xl">
                <a
                    href="https://wa.me/56995388656"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amarilloDB"
                    title="WhatsApp"
                >
                    <FaWhatsapp />
                </a>
                <a
                    href="https://www.linkedin.com/in/exequielacevedo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amarilloDB"
                    title="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/Ekzegit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amarilloDB"
                    title="GitHub"
                >
                    <FaGithub />
                </a>
            </div>

            <p className="text-sm mt-6 text-white/70">
                Desarrollado con 💻 + ⚡ al estilo Saiyajin
            </p>
        </footer>
    );
}

export default Footer;
