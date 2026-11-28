import { useState } from "react";
import "../../assets/css/Activity.css";

const activity = {
    entradas: [
        { guest: "María Gómez", room: "Habitación 203", action: "Check-in" },
        { guest: "Carlos Pérez", room: "Habitación 108", action: "Entregar llave" },
    ],
    salidas: [
        { guest: "Ana Rodríguez", room: "Habitación 305", action: "Finalizar" },
        { guest: "Luis Mendoza", room: "Habitación 112", action: "Check-out" },
    ],
};

export default function Activity() {
    const [activityTab, setActivityTab] = useState("entradas");

    return (
        <section className="dashboard-activity" aria-labelledby="activity-title">
            <div className="dashboard-activity-header">
                <h2 id="activity-title">Actividad de Hoy</h2>
                <div className="dashboard-activity-tabs" role="tablist" aria-label="Actividad diaria">
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activityTab === "entradas"}
                        className={activityTab === "entradas" ? "active" : ""}
                        onClick={() => setActivityTab("entradas")}
                    >
                        Entradas
                    </button>
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activityTab === "salidas"}
                        className={activityTab === "salidas" ? "active" : ""}
                        onClick={() => setActivityTab("salidas")}
                    >
                        Salidas
                    </button>
                </div>
            </div>
            <div className="dashboard-activity-list" role="tabpanel">
                {activity[activityTab].map((item) => (
                    <article className="dashboard-activity-item" key={item.guest}>
                        <div>
                            <strong>{item.guest}</strong>
                            <span>{item.room}</span>
                        </div>
                        <button type="button">{item.action}</button>
                    </article>
                ))}
            </div>
        </section>
    );
}
