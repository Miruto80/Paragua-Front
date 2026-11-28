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
        color: "#8C4A32",
    },
    {
        title: "Salidas de Hoy",
        value: "3 habitaciones",
        description: "Hora límite: 12:00 PM",
        icon: faCalendarXmark,
        color: "#D97706",
    },
    {
        title: "Ocupación Actual",
        value: "12 / 15 Hab.",
        description: "3 habitaciones disponibles para hoy",
        icon: faBed,
        color: "#289FB7",
    },
    {
        title: "Saldos Pendientes",
        value: "3 reservas",
        description: "Por cobrar en recepción",
        icon: faMoneyBillWave,
        color: "#D97706",
    },
    {
        title: "Ingresos del Mes",
        value: "$ 1.250",
        description: "Total acumulado del mes (muestra)",
        icon: faChartLine,
        color: "#2E7D5B",
    },
];

export default function DashboardCards() {
    return (
        <section className="dashboard-summary" aria-label="Resumen de hoy">
            <div className="dashboard-cards-grid">
                {cards.map((card) => (
                    <DashboardCard key={card.title} {...card} />
                ))}
            </div>
        </section>
    );
}