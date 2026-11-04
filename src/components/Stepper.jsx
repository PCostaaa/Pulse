import { Check } from "lucide-react";
import "./Stepper.css";

export default function Stepper({ steps, getStatus }) {
    return (
        <ol className="stepper">
            {steps.map((step, index) => {
                const status = getStatus(index);

                return (
                    <li key={step.id} className={`stepper__step stepper__step--${status}`}>
                        <span className="stepper__label">{step.label}</span>
                        <span className="stepper__marker">
                            {status === "completed" ? <Check size={12}/> : index + 1}
                        </span>
                    </li>
                );
            })}
        </ol>
    );
}