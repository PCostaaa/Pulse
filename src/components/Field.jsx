import { useId } from "react";
import "./Field.css";

export default function Field ({ label, error, ...inputProps }) {
    const errorId = useId();

    return (
        <label className="field">
            <span className="field__label">{label}</span>
            <input
                className={`field__input ${error ? "field__input--error" : ""}`}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? errorId : undefined}
                {...inputProps}
            />
            {error && (
                <span id={errorId} className="field__error">
                    {error}
                </span>
            )}
        </label>
    );
}