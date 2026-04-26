import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Footer from "./components/Footer.jsx"
import { FaWhatsapp } from "react-icons/fa";
import Contact from "./pages/Contact.jsx";

function App() {
    return (
        <>
            <Navbar />
            <a
                href="https://wa.me/5511996352392?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20com%20a%20Marcenaria%20Oriental."
                target="_blank"
                rel="noopener noreferrer"
                className="fixed z-10 bottom-6 right-6 bg-green-500 text-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition-colors glow-green"
            >
                <FaWhatsapp size={30} />
            </a>
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;