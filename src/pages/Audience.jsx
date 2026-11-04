import StatCard from "../components/StatCard";
import Panel from "../components/Panel";
import VisitorTrendsChart from "../components/VisitorTrendsChart";
import BarList from "../components/BarList";
import UsersTable from "../components/UsersTable";
import { audienceKpis, userGrowth, ageGroups, users } from "../data/audience";

const growthSeries = [
    { key: "newUsers", name: "New users", color: "#6366f1" },
    { key: "returning", name: "Returning", color: "#10b981"},
];

export default function Audience() {
    return (
        <>
            <div className="page-intro">
                <div>
                    <h1 className="greeting__title">Audience</h1>
                    <p className="greeting__date">Understand who your users are and how they behave.</p>
                </div>
            </div>

            <section className="stats">
                {audienceKpis.map((kpi) => (
                    <StatCard
                        key={kpi.id}
                        label={kpi.label}
                        value={kpi.value}
                        change={kpi.change}
                        inverse={kpi.inverse}
                    />
                ))}
            </section>

            <div className="overview-grid">
                <Panel title="User Growth" footer="New vs returning users over time">
                    <VisitorTrendsChart data={userGrowth} series={growthSeries}/>
                </Panel>

                <Panel title="Age Distribution" footer="Users by age group">
                    <BarList items={ageGroups} max={100} formatValue={(value) => `${value}%`}/>
                </Panel>
            </div>

            <Panel>
                <UsersTable users={users}/>
            </Panel>
        </>
    );
}