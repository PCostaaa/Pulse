import { ArrowRight } from "lucide-react";
import "./StatCard.css";

export default function StatCard({label, value, change, inverse = false, comparison = "vs last month"}) {
    const isUp = change >=0;
    const isGood = inverse ? !isUp : isUp;

    return (
        <article className="stat-card">
            <div className="stat-card__head">
                <h3 className="stat-card__label">{label}</h3>
                <ArrowRight size={16} className="stat-card__arrow" aria-hidden="true" />
            </div>

            <p className="stat-card__value">{value}</p>

            <p className={`stat-card__change ${isGood ? "stat-card__change--up" : "stat-card__change--down"}`}>
                {isUp ? "+" : ""}
                {change}% {comparison}
            </p>
        </article>
    )
}