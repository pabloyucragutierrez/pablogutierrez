import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Header } from "./assets/components/Header";
import { Inicio } from "./assets/pages/Inicio";
import { Proyectos } from "./assets/pages/Proyectos";
import { Cv } from "./assets/pages/Cv";
import { Contacto } from "./assets/pages/Contacto";
import { Footer } from "./assets/components/Footer";
import { Home } from "./assets/pages/Home";
import Error404 from "./assets/pages/Error404";
import { PoliticaDePrivacidad } from "./assets/pages/PoliticaDePrivacidad";

function App() {
  return (
    <div className="container">
      <BrowserRouter basename="/">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/curriculum" element={<Navigate to="/sobre-mi" />} />
            <Route path="/sobre-mi" element={<Cv />} />
            <Route path="/cv" element={<Navigate to="/sobre-mi" />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route
              path="/politica-de-privacidad"
              element={<PoliticaDePrivacidad />}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
