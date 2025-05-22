/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}", // <- esto incluye todos los componentes posibles
    ],
    theme: {
        extend: {
            colors: {
                naranjaDB: "#f77f00",
                azulDB: "#003049",
                amarilloDB: "#fcbf49",
            },
        },
    },
    plugins: [],
};
