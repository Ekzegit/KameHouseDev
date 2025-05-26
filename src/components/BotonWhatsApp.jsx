import React from 'react';
import './BotonWhatsApp.css';

const BotonWhatsApp = () => {
    const mensaje = encodeURIComponent(
        "Hola KameHouseDev, estoy interesado en crear un sitio web. ¿Me pueden ayudar?"
    );

    return (
        <a
            href={`https://wa.me/56948804689?text=${mensaje}`}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chatea con nosotros por WhatsApp"
        >
            <img src="/whatsapp-icon.webp" alt="WhatsApp" />
        </a>
    );
};

export default BotonWhatsApp;
