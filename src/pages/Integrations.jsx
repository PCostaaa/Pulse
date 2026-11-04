import { useState } from "react";
import SegmentedControl from "../components/SegmentedControl";
import IntegrationCard from "../components/IntegrationCard";
import { integrationTabs, initialIntegrations } from "../data/integrations";
import useLocalStorage from "../hooks/useLocalStorage";
import "./Onboarding.css";

export default function Integrations() {
    const [integrations, setIntegrations] = useLocalStorage("pulse-integrations", initialIntegrations);
    const [tab, setTab] = useState("All");

    function handleToggle(id) {
        setIntegrations((prev) =>
            prev.map((item) => (item === id ? { ...item, connected: !item.connected } : item))
        );
    }

    const connectedCount = integrations.filter((item) => item.connected).length;

    const visible =
        tab === "All"
            ? integrations
            : integrations.filter((item) => (tab === "Connected" ? item.connected : !item.connected));

    return (
        <>
            <div className="page-intro">
                <div>
                    <h1 className="greeting__title">Integrations</h1>
                    <p className="greeting__date">
                        Connect Pulse to the tools your team already uses. {connectedCount} of {integrations.length} connected.
                    </p>
                </div>

                <SegmentedControl
                    options={integrationTabs}
                    value={tab}
                    onChange={setTab}
                    label="Filter integrations"
                    className="segmented--soft"
                />
            </div>

            {visible.length > 0 ? (
                <div className="integrations-grid">
                    {visible.map((integration) => (
                        <IntegrationCard key={integration.id} integration={integration} onToggle={handleToggle} />
                    ))}
                </div>
            ) : (
                <p className="empty-state">No integrations in this view.</p>
            )}

            <div className="onboarding-help">
                <div>
                    <strong>Can't find what you need?</strong>
                    <p>Request a new integration and we'll look into it.</p>
                </div>
                <button type="button" className="btn btn--soft">Request integration</button>
            </div>
        </>
    );
}