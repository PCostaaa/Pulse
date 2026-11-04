import { PieChart, Pie, Cell } from "recharts";
import "./Charts.css";

export default function TrafficChart ({ data }) {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="chart-box traffic">
            <div className="traffic__donut">
                <PieChart width={160} height={160}>
                    <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={50}
                    outerRadius={75}
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                    >
                        {data.map((item) => (
                            <Cell key={item.name} fill={item.color} />
                        ))}
                    </Pie>
                </PieChart>

                <div className="traffic__center">
                    <strong>{total}%</strong>
                    <span>Total</span>
                </div>
            </div>

            <ul className="traffic__legend">
                {data.map((item => (
                    <li key={item.name}>
                        <span className="traffic__dot" style={{background: item.color}}/>
                        {item.name}
                        <strong>{item.value}%</strong>
                    </li>
                )))}
            </ul>
        </div>
    )
}