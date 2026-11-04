import "./TransactionsTable.css";
import "./ReportsTable.css";
import "./IntegrationCard.css";

export default function IntegrationCard ({ integration, onToggle }) {
    const { id, name, category, description, connected, tone } = integration;

    return (
        <article className="integration-card">
            <div className="integration-card__head">
                <span className={`integration-card__logo integration-card__logo--${tone}`} aria-hidden= "true">
                    {name[0]}
                </span>
                <span className="tag">{category}</span>
            </div>

            <div>
                <h3 className="integration-card__name">{name}</h3>
                <p className="integration-card__text">{description}</p>
            </div>

            <div className="integration-card__footer">
                <span className={`badge ${connected ? "badge--active" : "badge--neutral"}`}>
                    {connected ? "Connected" : "Not connected"}
                </span>
                <button
                    type="button"
                    className={`btn btn--small ${connected ? "btn--outline" : "btn--primary"}`}
                    onClick={() => onToggle(id)}
                >
                        {connected ? "Disconnect" : "Connect"}
                </button>
            </div>
        </article>
    )
}