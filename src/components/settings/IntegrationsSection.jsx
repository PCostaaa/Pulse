import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Panel from "../Panel";
import useLocalStorage from "../../hooks/useLocalStorage";
import { initialIntegrations } from "../../data/integrations";
import "../IntegrationCard.css";
import "../ReportsTable.css";

export default function IntegrationsSection() {
    const [integrations] = useLocalStorage("pulse-integrations", initialIntegrations);

    const connected = integrations.filter((item) => item.connected);

    return (
        <Panel title="Integrations">
            <div className="settings__form">
                <div className="integrations--summary">
                    <p className="integrations-summary__count">
                        <strong>{connected.length}</strong> of {integrations.length} integrations connected
                    </p>
                    <Link to="/integrations" className="btn btn--outline">
                        Manage integrations
                        <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                </div>

                {connected.length > 0 ? (
                    <ul className="connected-list">
                        {connected.map((item) => (
                            <li key={item.id} className="connected-list__item">
                                <span
                                className={`integration-card__logo integration-card__logo--${item.tone}`}
                                aria-hidden="true"
                                >
                                    {item.name[0]}
                                </span>
                                <strong className="connected-list__name">{item.name}</strong>
                                <span className="tag">{item.category}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="empty-state">No integrations connected yet.</p>
                )}
            </div>
        </Panel>
    );
}