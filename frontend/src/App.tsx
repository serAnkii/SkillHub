import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./Components/LandingPage";
import AuthenticatedApp from "./Components/AuthenticatedApp";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSideNavbarVisible, setIsSideNavbarVisible] = useState<boolean>(true);
  
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const toggleSideNavbar = () => {
    setIsSideNavbarVisible(!isSideNavbarVisible);
  };

  return (
    <Router>
      <Navbar
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        onLogin={handleLogin}
        toggleSideNavbar={toggleSideNavbar}
      />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/app/*' element={<AuthenticatedApp isVisible={isSideNavbarVisible} />} />
      </Routes>
    </Router>
  );
}

export default App;
