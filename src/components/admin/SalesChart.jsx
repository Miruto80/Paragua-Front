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
  const fechas = Array.from({ length: 7 }, (_, index) => {
    const fecha = new Date();
    fecha.setHours(0, 0, 0, 0);
    fecha.setDate(fecha.getDate() - 6 + index);

    return fecha;
  });
  const ingresos = [120, 85, 200, 0, 160, 240, 180];
  const data = {
    labels: fechas.map((fecha) =>
      fecha.toLocaleDateString("es-VE", {
        weekday: "short",
        day: "numeric",
      })
    ),
    datasets: [
      {
        label: "Ingresos ($)",
        data: ingresos,
        borderColor: "#17195A",
        backgroundColor: "rgba(229,184,63,.18)",
        fill: true,
        tension: 0.35,
        pointBackgroundColor: "#E5B83F",
        pointBorderColor: "#17195A",
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
        display: true,
        text: "Ingresos de los últimos 7 días",
        font: {
          size: 18,
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$ ${Number(value).toLocaleString("es-VE")}`,
        },
        grid: {
          color: "#ececec",
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
        <div
          style={{
            height: "350px",
          }}
        >
          <Line data={data} options={options} />
        </div>
        <p className="text-center text-muted mt-2">Datos de muestra.</p>
      </div>
    </div>
  );
};

export default SalesChart;