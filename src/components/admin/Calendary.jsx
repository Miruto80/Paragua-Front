import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import classicThemePlugin from "@fullcalendar/react/themes/classic";
import dayGridPlugin from "@fullcalendar/react/daygrid";
import interactionPlugin from "@fullcalendar/react/interaction";
import esLocale from "@fullcalendar/react/locales/es";
import "@fullcalendar/react/skeleton.css";
import "@fullcalendar/react/themes/classic/theme.css";
import "@fullcalendar/react/themes/classic/palette.css";
import "../../assets/css/Calendary.css";

export default function Calendary() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <section className="dashboard-calendar">
      {selectedDate && (
        <p className="dashboard-calendar-selected">
          Fecha seleccionada:{" "}
          {selectedDate.toLocaleDateString("es-VE", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      )}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, classicThemePlugin]}
        initialView="dayGridMonth"
        locale={esLocale}
        todayText="Hoy"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "",
        }}
        height={480}
        fixedWeekCount={false}
        dayMaxEvents
        dateClick={({ date }) => setSelectedDate(date)}
      />
    </section>
  );
}
