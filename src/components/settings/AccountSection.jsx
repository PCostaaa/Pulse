import { useState } from "react";
import Panel from "../Panel";
import Field from "../Field";
import SelectField from "../SelectField";
import { languages, timezones, dateFormats } from "../../data/settings";

export default function AccountSection({ form, onChange }) {
  const [deleteMessage, setDeleteMessage] = useState("");

  function handleDelete() {
    const confirmed = window.confirm("Delete your account? This can't be undone.");
    if (confirmed) {
      setDeleteMessage("This is a demo — your account was not deleted.");
    }
  }

  return (
    <Panel title="Account Settings">
      <div className="settings__form">
        <Field label="Username" name="username" value={form.username} onChange={onChange} required />

        <div className="settings__row">
          <SelectField label="Language" name="language" value={form.language} onChange={onChange} options={languages} />
          <SelectField label="Timezone" name="timezone" value={form.timezone} onChange={onChange} options={timezones} />
        </div>

        <SelectField label="Date format" name="dateFormat" value={form.dateFormat} onChange={onChange} options={dateFormats} />

        <h3 className="settings__subtitle">Danger zone</h3>
        <div className="danger-zone">
          <div>
            <strong>Delete account</strong>
            <p className="greeting__date">Permanently delete your account and all of its data. This can’t be undone.</p>
            {deleteMessage && <p className="danger-zone__message">{deleteMessage}</p>}
          </div>
          <button type="button" className="btn btn--danger btn--small" onClick={handleDelete}>
            Delete account
          </button>
        </div>
      </div>
    </Panel>
  );
}