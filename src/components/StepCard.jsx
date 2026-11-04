import "./StepCard.css";

const statusLabels = {
    completed: "Completed",
    "in-progress": "In progress",
    "not-started": "Not started",
};

export default function StepCard({ step, status, onAction }) {
    const Icon = step.icon;

    return (
        <article className={`step-card step-card--${status}`}>
            <span className="step-card__icon">
                <Icon size={20} />
            </span>
            <span className="step-card__status">{statusLabels[status]}</span>
            <h3 className="step-card__title">{step.title}</h3>
            <p className="step-card__text">{step.description}</p>

            {status === "completed" && (
                <button type="button" className="btn btn--outline">{step.doneAction}</button>
            )}
            {status === "in-progress" && (
                <button type="button" className="btn btn--primary" onClick={onAction}>{step.action}</button>
            )}
            {status === "not-started" && (
                <button type="button" className="btn btn--outline" disabled>{step.action}</button>
            )}
        </article>
    )
}