import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DashboardCard({
    title,
    value,
    description,
    icon,
    color,
}) {
    return (
        <article className="dashboard-card">
            <span className="dashboard-icon" style={{ background: color }} aria-hidden="true">
                <FontAwesomeIcon icon={icon} />
            </span>
            <span className="dashboard-card-content">
                <span className="dashboard-card-title">{title}</span>
                <span className="dashboard-card-value">{value}</span>
                <span className="dashboard-card-description">{description}</span>
            </span>
        </article>
    );
}