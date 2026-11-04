import "./Toggle.css";

export default function Toggle({ label, description, ...inputProps }) {
    return (
        <label className="toggle">
            <span className="toggle__text">
                <strong>{label}</strong> <span>| {description}</span>
            </span>
            <input type="text" className="toggle__input" {...inputProps} />
            <span className="toggle__track" aria-hidden="true"/>
        </label>
    );
}