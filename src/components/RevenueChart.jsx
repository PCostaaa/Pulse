import {AreaChart, Area, XAxis, Tooltip, ResponsiveContainer} from "recharts";
import {formatCurrency} from "../utils/format";
import "./Charts.css";

function RevenueTooltip({active, payload}) {
    if (!active || !payload?.length) return null;
    return <div className="chart-tooltip">{formatCurrency(payload[0].value, 0)}</div>;
}

export default function RevenueChart({data}) {
    return (
        <div className="chart-box">
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={data} margin={{top: 24, right: 16, bottom: 0, left: 16}}>
                <defs>
                    <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity={0.25} />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity={0}/>    
                    </linearGradient>
                </defs>
                
                <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{fontSize: 11, fill: "#9ca3af"}}
                />
                <Tooltip content={<RevenueTooltip/>} cursor={{stroke: "var(--stroke)"}}/>

                <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#6366f1"
                    strokeWidth={2}
                    fill="url(#revenueFill)"
                    dot={{r: 4, fill:"var(--card)", stroke: "#6366f1", strokeWidth: 2}}
                    activeDot={{r: 5}}
                />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}