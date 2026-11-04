import { useState } from "react";
import { User, Cog, Bell, Shield, CreditCard, Plug } from "lucide-react";
import Panel from "../components/Panel";
import ProfileSection from "../components/settings/ProfileSection";
import AccountSection from "../components/settings/AccountSection";
import useLocalStorage from "../hooks/useLocalStorage";
import { initialSettings } from "../data/settings";
import NotificationsSection from "../components/settings/NotificationsSection";
import SecuritySection from "../components/settings/SecuritySection";
import BillingSection from "../components/settings/BillingSection";
import IntegrationsSection from "../components/settings/IntegrationsSection";
import "./Settings.css";

const sections = [
  { id: "profile", label: "Profile", icon: User },
  { id: "account", label: "Account", icon: Cog },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "integrations", label: "Integrations", icon: Plug },
];

export default function Settings() {
  const [activeSection, setActiveSection] = useState("profile");
  const [storedSettings,setSaved] = useLocalStorage("pulse-settings", initialSettings);
  const saved = { ...initialSettings, ...storedSettings };
  const [form, setForm] = useState(saved);
  const [message, setMessage] = useState("");

  const isDirty = JSON.stringify(form) !== JSON.stringify(saved);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setMessage("");
  }

  function handleNotificationChange(typeId, channel, checked) {
    setForm((prev) => ({
      notifications: {
        ...prev.notifications,
        [typeId]: { ...prev.notifications[typeId], [channel]: checked },
      },
    }));
    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSaved(form);
    setMessage("Changes saved.");
  }

  function renderSection() {
    switch (activeSection) {
      case "profile":
        return <ProfileSection form={form} onChange={handleChange} />;
      case "account":
        return <AccountSection form={form} onChange={handleChange} />;
      case "notifications":
        return (
          <NotificationsSection
            form={form}
            onChange={handleChange}
            onNotificationChange={handleNotificationChange}
          />
        );
        case "security":
          return <SecuritySection form={form} onChange={handleChange} />;
        case "billing":
          return <BillingSection />;
        case "integrations":
          return <IntegrationsSection />
          
      default:
        return null;
    }
  }

  return (
    <>
      <div className="page-intro">
        <div>
          <h1 className="greeting__title">Settings</h1>
          <p className="greeting__date">Manage your account, preferences and integrations.</p>
        </div>

        <div className="settings__save">
          <span className="settings__message" aria-live="polite">{message}</span>
          <button type="submit" form="settings-form" className="btn btn--primary" disabled={!isDirty}>
            Save changes
          </button>
        </div>
      </div>

      <div className="settings">
        <Panel className="settings__nav">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                type="button"
                className={`settings__link ${section.id === activeSection ? "settings__link--active" : ""}`}
                onClick={() => setActiveSection(section.id)}
              >
                <Icon size={16} />
                {section.label}
              </button>
            );
          })}
        </Panel>

        <form id="settings-form" onSubmit={handleSubmit}>
          {renderSection()}
        </form>
      </div>
    </>
  );
}