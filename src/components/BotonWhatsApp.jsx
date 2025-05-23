import React from 'react';
import './BotonWhatsApp.css';

const BotonWhatsApp = () => {
  return (
    <a
      href="https://wa.me/569XXXXXXXX"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea con nosotros por WhatsApp"
    >
      <img src="/whatsapp-icon.png" alt="WhatsApp" />
    </a>
  );
};

export default BotonWhatsApp;
