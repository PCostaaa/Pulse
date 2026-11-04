import "./Toggle.css";

export default function Switch ({ label, ...inputProps }) {
    return (
        <label className="switch">
            <input type="checkbox" className="toggle__input" aria-label={label} {...inputProps} />
            <span className="toggle__track" aria-hidden="true"></span>
        </label>
    );
}