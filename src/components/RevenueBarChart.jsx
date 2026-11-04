import { BarChart, Bar, Cell, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { formatCurrency } from "../utils/format";
import "./Charts.css";

function BarTooltip({ active, payload }) {
    if (!active || !payload?.length) return null;
    return <div className="chart-tooltip">{formatCurrency(payload[0].value, 0)}</div>;
}

export default function RevenueBarChart({ data }) {
    const lastIndex = data.length - 1;

    return (
        <div className="chart-box">
            <ResponsiveContainer width="100%" height={220}>
                <BarChart data={data} margin={{ top: 24, right: 26, bottom: 0, left: 16}}>
                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 11, fill: "var(--stroke)" }}
                    />
                    <Tooltip content={<BarTooltip />} cursor={{ fill: "rgba(99, 102, 241, 0.08" }} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={40}>
                        {data.map((item, index) => (
                            <Cell key={item.month} fill={index === lastIndex ? "#4f46e5" : "#6366f1"}/>
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}