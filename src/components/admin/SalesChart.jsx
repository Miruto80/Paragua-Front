import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

const SalesChart = () => {
  const [period, setPeriod] = useState("Semana");
  const fechas = Array.from({ length: 7 }, (_, index) => {
    const fecha = new Date();
    fecha.setHours(0, 0, 0, 0);
    fecha.setDate(fecha.getDate() - 6 + index);

    return fecha;
  });
  const ingresos = [120, 85, 200, 0, 160, 240, 180];
  const monthLabels = ["1", "5", "10", "15", "20", "25", "30"];
  const monthIncome = [620, 740, 680, 920, 880, 1090, 1250];
  const chartLabels = period === "Semana"
    ? fechas.map((fecha) => fecha.toLocaleDateString("es-VE", { weekday: "short", day: "numeric" }))
    : monthLabels;
  const chartIncome = period === "Semana" ? ingresos : monthIncome;
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Ingresos ($)",
        data: chartIncome,
        borderColor: "#8C4A32",
        backgroundColor: "rgba(140,74,50,.14)",
        fill: true,
        tension: 0.35,
        pointBackgroundColor: "#289FB7",
        pointBorderColor: "#FFFFFF",
        pointBorderWidth: 2,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$ ${Number(value).toLocaleString("es-VE")}`,
        },
        grid: {
          color: "#EFE8E1",
        },
      },

      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="card dashboard-chart">
      <div className="card-body">
        <div className="dashboard-chart-header">
          <div>
            <p>Resumen financiero</p>
            <h2>Ingresos recientes</h2>
          </div>
          <div className="dashboard-chart-period" aria-label="Periodo del gráfico">
            {["Semana", "Mes"].map((option) => (
              <button
                type="button"
                key={option}
                className={period === option ? "active" : ""}
                aria-pressed={period === option}
                onClick={() => setPeriod(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div
          style={{
            height: "240px",
          }}
        >
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SalesChart;