import { Routes, Route } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout.jsx";
import Dashboard from "../pages/admin/Dashboard.jsx";
import Rooms from "../pages/admin/Rooms.jsx";
import Reservations from "../pages/admin/Reservations.jsx";
import Reports from "../pages/admin/Reports.jsx";
import Rent from "../pages/admin/Rent.jsx";
import Clients from "../pages/admin/Clients.jsx";
import Notifications from "../pages/admin/Notifications.jsx";

function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="habitaciones" element={<Rooms />} />
      <Route path="reservas" element={<Reservations />} />
      <Route path="reportes" element={<Reports />} />
      <Route path="alquiler" element={<Rent />} />
      <Route path="clientes" element={<Clients />} />
      <Route path="notificaciones" element={<Notifications />} />
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
