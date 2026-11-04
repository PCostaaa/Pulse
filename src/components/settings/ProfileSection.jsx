import Panel from "../Panel";
import Field from "../Field";
import Toggle from "../Toggle";
import { getInitials } from "../../utils/format";
import { useTheme } from "../../context/theme";

export default function ProfileSection({ form, onChange }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Panel title="Profile Settings">
      <div className="settings__form">
        <div className="settings__profile">
          <span className="settings__avatar">{getInitials(form.name)}</span>
          <div>
            <strong>{form.name}</strong>
            <p className="greeting__date">{form.jobTitle} · {form.email}</p>
          </div>
          <button type="button" className="btn btn--outline">Change photo</button>
        </div>

        <Field label="Full name" name="name" value={form.name} onChange={onChange} required />
        <Field label="Email address" name="email" type="email" value={form.email} onChange={onChange} required />
        <Field label="Job title" name="jobTitle" value={form.jobTitle} onChange={onChange} />

        <h3 className="settings__subtitle">Appearance</h3>
        <Toggle
          label="Dark mode"
          description="Switch to dark interface"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
      </div>
    </Panel>
  );
}