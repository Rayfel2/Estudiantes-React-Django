import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LogIn from "./pages/LogIn";
import DashboardProfesor from "./pages/DashboardProfesor";
import VerPerfil from "./pages/VerPerfil";
import REGISTRARUSUARIO from "./pages/REGISTRARUSUARIO";
import DashboardEstudiante2 from "./pages/DashboardEstudiante2";
import SeleccionEstudiante from "./pages/SeleccionEstudiante";
import SeleccionEstudiante1 from "./pages/SeleccionEstudiante1";
import SeleccionEstudiante2 from "./pages/SeleccionEstudiante2";
import MateriasEstudiante from "./pages/MateriasEstudiante";
import CalificacionesEstudiante from "./pages/CalificacionesEstudiante";
import LANDINGPAGEHOME from "./pages/LANDINGPAGEHOME"
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/ver-perfil":
        title = "";
        metaDescription = "";
        break;
      case "/recuperar-contraseña":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-estudiante2":
        title = "";
        metaDescription = "";
        break;
      case "/seleccion-estudiante":
        title = "";
        metaDescription = "";
        break;
      case "/seleccion-estudiante1":
        title = "";
        metaDescription = "";
        break;
      case "/seleccion-estudiante2":
        title = "";
        metaDescription = "";
        break;
      case "/materias-estudiante":
        title = "";
        metaDescription = "";
        break;
      case "/calificaciones-estudiante":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/ver-perfil" element={<VerPerfil />} />
      <Route path="/recuperar-contraseña" element={<REGISTRARUSUARIO />} />
      <Route path="/dashboard-estudiante2" element={<DashboardEstudiante2 />} />
      <Route path="/seleccion-estudiante" element={<SeleccionEstudiante />} />
      <Route path="/seleccion-estudiante1" element={<SeleccionEstudiante1 />} />
      <Route path="/seleccion-estudiante2" element={<SeleccionEstudiante2 />} />
      <Route path="/materias-estudiante" element={<MateriasEstudiante />} />
      <Route
        path="/calificaciones-estudiante"
        element={<CalificacionesEstudiante />}
      />
      <Route path="/dashboard-profesor" element={<DashboardProfesor />} />
      <Route path="/landing-page" element={<LANDINGPAGEHOME />} />
    </Routes>
  );
}
export default App;
