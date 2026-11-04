import "./BarList.css";

export default function BarList({ items, max, formatValue = (value) => value }) {
    const highest = max ?? Math.max(...items.map((item) => item.value));

    return (
        <ul className="bar-list">
            {items.map((item) => (
                <li key={item.label} className="bar-list__row">
                    <span className="bar-list__label">{item.label}</span>
                    <div className="bar-list__track">
                        <div 
                            className="bar-list__fill"
                            style={{ width: `${(item.value / highest) * 100}%` }}
                        />
                    </div>
                    <span className="bar-list__value">{formatValue(item.value)}</span>
                </li>
            ))}
        </ul>
    )
}