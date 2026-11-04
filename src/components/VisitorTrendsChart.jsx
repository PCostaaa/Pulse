import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { formatCompact } from "../utils/format";
import "./Charts.css";

function TrendsTooltip ({ active, payload, label }) {
    if (!active || !payload?.length) return null;

    return (
        <div className="chart-tooltip">
            <div>{label}</div>
            {payload.map((item) => (
                <div key={item.dataKey}>
                    {item.name}: {item.value.toLocaleString("en-US")}
                </div>
            ))}
        </div>
    );
}

const defaultSeries = [
        { key: "current", name: "This period", color: "#6366f1" },
        { key: "previous", name: "Last period", color: "#10b981", dashed: true },
    ];

export default function VisitorTrendsChart({ data, series= defaultSeries }) {
    return (
        <div className="chart-box chart-box--tinted">
            <ResponsiveContainer width="100%" height={240}>
                <LineChart data={data} margin={{ top: 8, right: 24, bottom: 0, left: 0}}>
                    <XAxis
                        dataKey="label"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 11, fill: "#9ca3af" }}
                    />

                    <YAxis
                        tickFormatter={formatCompact}
                        axisLine={false}
                        tickLine={false}
                        width={48}
                        tick={{ fontSize: 11, fill:"#9ca3af" }}
                    />

                    <Tooltip content={<TrendsTooltip />} cursor={{ stroke: "var(--stroke)" }} />
                    <Legend verticalAlign="top" align="right" iconType = "plainline" wrapperStyle = {{ fontSize: 11 }} />
                    {series.map((line) => (
                        <Line
                        key={line.key}
                        name={line.name}
                        type="monotone"
                        dataKey={line.key}
                        stroke={line.color}
                        strokeWidth={2}
                        strokeDasharray={line.dashed ? "6 4" : undefined}
                        dot={line.dashed ? false : { r: 3, fill: "var(--card)", strokeWidth: 2}}
                    />
                    ))}
                    
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}