import Panel from "../Panel";
import Toggle from "../Toggle";
import Switch from "../Switch";
import SelectField from "../SelectField";
import { notificationTypes, hourOptions } from "../../data/settings";

export default function NotificationsSection({ form, onChange, onNotificationChange }) {
  return (
    <Panel title="Notification Settings">
      <div className="settings__form">
        <p className="greeting__date">Choose how and when Pulse keeps you in the loop.</p>

        <div className="table-wrap">
          <table className="matrix">
            <thead>
              <tr>
                <th>Notification</th>
                <th>Email</th>
                <th>In-app</th>
              </tr>
            </thead>
            <tbody>
              {notificationTypes.map((type) => {
                const channels = form.notifications[type.id];
                return (
                  <tr key={type.id}>
                    <td>
                      <strong>{type.title}</strong>
                      <span>{type.description}</span>
                    </td>
                    <td>
                      <Switch
                        label={`${type.title} by email`}
                        checked={channels.email}
                        onChange={(event) => onNotificationChange(type.id, "email", event.target.checked)}
                      />
                    </td>
                    <td>
                      <Switch
                        label={`${type.title} in the app`}
                        checked={channels.inApp}
                        onChange={(event) => onNotificationChange(type.id, "inApp", event.target.checked)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h3 className="settings__subtitle">Quiet hours</h3>
        <Toggle
          label="Pause notifications"
          description="Mute in-app notifications outside working hours"
          name="quietHoursEnabled"
          checked={form.quietHoursEnabled}
          onChange={onChange}
        />
        <div className="settings__row">
          <SelectField
            label="From"
            name="quietFrom"
            value={form.quietFrom}
            onChange={onChange}
            options={hourOptions}
            disabled={!form.quietHoursEnabled}
          />
          <SelectField
            label="Until"
            name="quietUntil"
            value={form.quietUntil}
            onChange={onChange}
            options={hourOptions}
            disabled={!form.quietHoursEnabled}
          />
        </div>
      </div>
    </Panel>
  );
}