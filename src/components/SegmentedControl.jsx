import "./SegmentedControl.css";

export default function SegmentedControl({ options, value, onChange, label, className= "" }) {
    return (
        <div className={`segmented ${className}`} role="group" aria-label={label}>
            {options.map((option) => (
                <button
                key={option}
                type="button"
                className={`segmented__option ${option === value ? "segmented__option--active" : ""}`}
                aria-pressed={option === value}
                onClick={() => onChange(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}