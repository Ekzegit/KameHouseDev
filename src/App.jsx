import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Proyectos from "./components/Proyectos";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Valores from "./components/Valores";







function App() {
    return (
        <div className="min-h-screen bg-naranjaDB text-white">
            <Header />
            <Inicio />
            <Nosotros />
            <Valores />
            <Proyectos />
            <Servicios />
            <Contacto />
            <Footer />

        </div>
    );
}


export default App;
