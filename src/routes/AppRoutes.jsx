import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/public/Home.jsx";
import FloatingWs from "../components/public/FloatingWs.jsx";

function AppRoutes() {
  const location = useLocation();


  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
      </Routes>
      <FloatingWs />
    </>
  );
}

export default AppRoutes;