import "./ReportSummary.css";

export default function ReportSummary ({ items, status }) {
    return (
        <dl className="summary">
            {items.map((item) => (
                <div key={item.label} className="summary__row">
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                </div>
            ))}

            <div className="summary__row summary__row--status">
                <dt>Status</dt>
                <dd>
                    <span className={`badge badge--${status}`}>{status}</span>
                </dd>
            </div>
        </dl>
    );
}