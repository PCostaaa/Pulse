import { ChevronDown } from "lucide-react";
import "./Field.css";

export default function SelectField({ label, options, ...selectProps }) {
    return (
        <label className="field">
            <span className="field__label">{label}</span>
            <span className="field__select">
                <select className="field__input" {...selectProps}>
                    {options.map((option) => (
                        <option key={option.value} value ={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <ChevronDown size={16} className="field__chevron" aria-hidden="true" />
            </span>
        </label>
    );
}