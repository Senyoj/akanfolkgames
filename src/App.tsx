import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound.js";
import Games from "./pages/Games.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import IndGames from "./pages/IndGames.js";
import LocationDetail from "./components/LocationDetail.js";
const AppLayout = () => {
  const location = useLocation();
  const validRoutes = ["/", "/games"];
  const showNavigation = validRoutes.includes(location.pathname);

  return (
    <div>
      {showNavigation && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/indigenous" element={<IndGames />} />
        <Route path="/locations/:id" element={<LocationDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showNavigation && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
