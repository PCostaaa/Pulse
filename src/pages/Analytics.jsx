import { useOutletContext } from "react-router";
import Panel from "../components/Panel";
import VisitorTrendsChart from "../components/VisitorTrendsChart";
import StatCard from "../components/StatCard";
import BarList from "../components/BarList";
import { formatCompact } from "../utils/format";
import { trendsByRange, analyticsKpis, topPages, devices } from "../data/analytics";

export default function Analytics() {
  const { period } = useOutletContext();

  return (
    <>
            <div className="page-intro">
        <div>
          <h1 className="greeting__title">Analytics</h1>
          <p className="greeting__date">Deep dive into your traffic and engagement data.</p>
        </div>
      </div>

      <Panel title="Visitor Trends">
        <VisitorTrendsChart data={trendsByRange[period]} />
      </Panel>

      <section className="stats stats--3">
        {analyticsKpis.map((kpi) => (
          <StatCard
            key={kpi.id}
            label={kpi.label}
            value={kpi.value}
            change={kpi.change}
            comparison="vs last period"
          />
        ))}
      </section>

      <div className="two-col">
        <Panel title="Top Pages" footer="By page views this year">
          <BarList items={topPages} formatValue={formatCompact} />
        </Panel>

        <Panel title="Device Breakdown" footer="Sessions this year">
          <BarList items={devices} max={100} formatValue={(value) => `${value}%`} />
        </Panel>
      </div>
    </>
  );
}