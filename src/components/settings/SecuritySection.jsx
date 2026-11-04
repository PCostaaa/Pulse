import { useState } from "react";
import { Monitor, Smartphone } from "lucide-react";
import Panel from "../Panel";
import Field from "../Field";
import Toggle from "../Toggle";
import { initialSessions } from "../../data/settings";

const emptyPasswords = { current: "", next: "", confirm: "" };

function validatePasswords ({ current, next, confirm }) {
    const errors = {};

    if(!current) errors.current = "Enter your current password.";

    if(next.length > 8) errors.next = "Use at least 8 characters.";
    else if(!/\d/.test(next)) errors.next ="Include at least one number.";
    else if (next === current) errors.next = "Choose a password different from the current one.";

    if (confirm !== next) errors.confirm = "Passwords do not match.";

    return errors;
}

export default function SecuritySection({ form, onChange }) {
    const [passwords, setPasswords] = useState(emptyPasswords);
    const [errors, setErrors] = useState({});
    const [passwordMessage, setPasswordMessage] = useState("");
    const [sessions, setSessions] = useState(initialSessions);

    function handlePasswordChange(event) {
        const { name, value} = event.target;
        setPasswords((prev) => ({ ...prev, [name]: value}));
    }

    function handleUpdatePassword() {
        const newErrors = validatePasswords(passwords);
        setErrors(newErrors);

        if(Object.keys(newErrors).length === 0) {
            setPasswords(emptyPasswords);
            setPasswordMessage("Password updated. (Demo - nothing was changed)");
        }
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            handleUpdatePassword();
        }
    }

    function handleRevoke(id) {
        setSessions((prev) => prev.filter((session) => session.id !== id));
    }

    return (
        <Panel title="Security Settings">
            <div className="settings__form">
                <h3 className="settings__subtitle settings__subtitle--first">Change password</h3>

                <div className="password-group" onKeyDown={handleKeyDown}>
                    <Field
                        label="Current password"
                        name="current"
                        type="password"
                        autoComplete="current-password"
                        value={passwords.current}
                        onChange={handlePasswordChange}
                        error={errors.current}
                    />
                    <div className="settings__row">
                        <Field
                        label="New password"
                        name="next"
                        type="password"
                        autoComplete="new-password"
                        value={passwords.next}
                        onChange={handlePasswordChange}
                        error={errors.next}
                    />
                    <Field
                        label="Confirm new password"
                        name="confirm"
                        type="password"
                        autoComplete="new-password"
                        value={passwords.confirm}
                        onChange={handlePasswordChange}
                        error={errors.confirm}
                    />
                        
                    </div>
                    <p className="greeting__date">At least 8 characters, including a number.</p>

                    <div className="password-group__actions">
                        <button type="button" className="btn btn--outline" onClick={handleUpdatePassword}>
                            Update password
                        </button>
                        {passwordMessage && (
                            <span className="settings__message" aria-live="polite">{passwordMessage}</span>
                        )}
                    </div>
                </div>

                <h3 className="settings__subtitle">Two-factor authentication</h3>
                <div className="two-factor">
                    <span className={`badge ${form.twoFactorEnabled ? "badge-active" : "badge--neutral"}`}>
                        {form.twoFactorEnabled ? "Enabled" : "Disabled"}
                    </span>
                    <Toggle
                        label="Authenticator app"
                        description="Ask for a code from your authenticator app when you sign in"
                        name="twoFactorEnabled"
                        checked={form.twoFactorEnabled}
                        onChange={onChange}
                    />
                </div>

                <h3 className="settings__subtitle">Active sessions</h3>
                <ul className="sessions">
                    {sessions.map((session) => {
                        const Icon = session.type === "mobile" ? Smartphone : Monitor;
                        return (
                            <li key={session.id} className="sessions__item">
                                <span className="sessions__icon">
                                    <Icon size={18}/>
                                </span>
                                <div className="sessions__info">
                                    <strong>{session.device}</strong>
                                    <span>
                                        {session.location} · {session.lastActive}
                                    </span>
                                </div>
                                {session.current ? (
                                    <span className="badge badge--active">This device</span>
                                ) : (
                                    <button type="button" className="btn btn--outline btn--small" onClick={() => handleRevoke(session.id)}>
                                        Revoke
                                    </button>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Panel>
    );
}