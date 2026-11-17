import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DashboardCard({
    title,
    value,
    description,
    icon,
    color,
    action,
    onAction,
    isActive = false,
}) {
    const content = (
        <>
            <span className="dashboard-icon" style={{ background: color }} aria-hidden="true">
                <FontAwesomeIcon icon={icon} />
            </span>
            <span className="dashboard-card-content">
                <span className="dashboard-card-title">{title}</span>
                <span className="dashboard-card-value">{value}</span>
                <span className="dashboard-card-description">{description}</span>
            </span>
        </>
    );

    if (action) {
        return (
            <button
                type="button"
                className={`dashboard-card dashboard-card-action${isActive ? " is-active" : ""}`}
                onClick={() => onAction?.(action)}
                aria-pressed={isActive}
            >
                {content}
            </button>
        );
    }

    return <article className="dashboard-card">{content}</article>;
}