import { useState } from "react";
import {
    faBed,
    faCalendarCheck,
    faCalendarXmark,
    faChartLine,
    faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

import DashboardCard from "./DashboardCard";
import "../../assets/css/DashboardCards.css";

const cards = [
    {
        title: "Entradas de Hoy",
        value: "4 habitaciones",
        description: "2 confirmadas • 2 pendientes por llegar",
        icon: faCalendarCheck,
        color: "#1d5b50",
        action: "arrivals",
    },
    {
        title: "Salidas de Hoy",
        value: "3 habitaciones",
        description: "Hora límite: 12:00 PM",
        icon: faCalendarXmark,
        color: "#bd5b36",
    },
    {
        title: "Ocupación Actual",
        value: "12 / 15 Hab.",
        description: "3 habitaciones disponibles para hoy",
        icon: faBed,
        color: "#3f51b5",
    },
    {
        title: "Saldos Pendientes",
        value: "3 reservas",
        description: "Por cobrar en recepción",
        icon: faMoneyBillWave,
        color: "#a77a17",
    },
    {
        title: "Ingresos del Mes",
        value: "$ 1.250",
        description: "Total acumulado del mes (muestra)",
        icon: faChartLine,
        color: "#287a49",
    },
];

export default function DashboardCards() {
    const [activeAction, setActiveAction] = useState(null);

    return (
        <section className="dashboard-summary" aria-label="Resumen de hoy">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-5 g-3">
                {cards.map((card) => (
                    <div className="col" key={card.title}>
                        <DashboardCard
                            {...card}
                            isActive={activeAction === card.action}
                            onAction={(action) =>
                                setActiveAction((currentAction) =>
                                    currentAction === action ? null : action
                                )
                            }
                        />
                    </div>
                ))}
            </div>
            {activeAction === "arrivals" && (
                <p className="dashboard-summary-selection" role="status">
                    Entradas de hoy resaltadas: 2 confirmadas y 2 pendientes por llegar.
                </p>
            )}
        </section>
    );
}
