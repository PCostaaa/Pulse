import { useOutletContext, Link} from "react-router";
import StatCard from "../components/StatCard";
import Panel from "../components/Panel";
import RevenueChart from "../components/RevenueChart";
import TrafficChart from "../components/TrafficChart";
import TransactionsTable from "../components/TransactionsTable";
import { kpisByPeriod } from "../data/kpis";
import { revenue, trafficSources, transactions }  from "../data/overview";

export default function Overview() {
    const {period} = useOutletContext();
    const kpis = kpisByPeriod[period];

    return (
        <>
            <div className="greeting">
                <h1 className="greeting__title">Good morning, Pedro</h1>
                <p className="greeting__date">Dec 12, 2024</p>
                <Link to="/onboarding" className="text-link">Finish setting up your workspace →</Link>
            </div>

            <section className="stats">
                {kpis.map((kpi) => (
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
                <Panel title="Revenue Overview" footer="Last updated 2 min ago">
                    <RevenueChart data={revenue}/>
                </Panel>

                <Panel title="Traffic Sources" footer="Last updated 2 min ago">
                    <TrafficChart data={trafficSources}/>
                </Panel>
            </div>

            <Panel>
                <TransactionsTable rows={transactions}/>
            </Panel>
        </>
    );
}