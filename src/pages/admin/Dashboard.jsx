import Calendary from "../../components/admin/Calendary";
import DashboardCards from "../../components/admin/DashboardCards";
import SalesChart from "../../components/admin/SalesChart";
import Activity from "../../components/admin/Activity";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faKey } from "@fortawesome/free-solid-svg-icons";
import { obtenerTasaEuro } from "../../utils/Tasa";
import "../../assets/css/Admin.css";

export default function Dashboard() {
    const navigate = useNavigate();
    const [tasaEuro, setTasaEuro] = useState(null);
    const [isLoadingTasa, setIsLoadingTasa] = useState(true);

    useEffect(() => {
        let isMounted = true;

        obtenerTasaEuro().then((tasa) => {
            if (isMounted) {
                setTasaEuro(tasa);
                setIsLoadingTasa(false);
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <main className="dashboard-container">
            <div className="dashboard-content">
                <section className="dashboard-view-header" aria-label="Encabezado del dashboard">
                    <div>
                        <h1>Panel de administración</h1>
                        <p className="dashboard-view-rate" aria-live="polite">
                            Tasa oficial del euro:{" "}
                            {isLoadingTasa
                                ? "consultando..."
                                : tasaEuro
                                    ? `Bs. ${Number(tasaEuro).toLocaleString("es-VE", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}`
                                    : "No disponible"}
                        </p>
                    </div>
                    <div className="dashboard-view-actions">
                        <button type="button" onClick={() => navigate("/admin/reservas")}>
                            <FontAwesomeIcon icon={faPlus} />
                            Nuevo check-in
                        </button>
                        <button type="button" onClick={() => navigate("/admin/alquiler")}>
                            <FontAwesomeIcon icon={faKey} />
                            Entrega de llave
                        </button>
                    </div>
                </section>

                <DashboardCards />
                
                <div className="container-fluid px-3 mt-4">
                    <div className="row g-3 align-items-stretch">
                        <div className="col-12 col-lg-6">
                            <Calendary />
                        </div>
                        <div className="col-12 col-lg-6 dashboard-right-column">
                            <Activity />
                            <SalesChart />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
