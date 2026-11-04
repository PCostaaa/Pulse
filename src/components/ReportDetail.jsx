import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import StatCard from "../components/StatCard";
import Panel from "../components/Panel";
import RevenueBarChart from "../components/RevenueBarChart";
import ReportSummary from "../components/ReportSummary";
import TransactionsTable from "../components/TransactionsTable";
import { reports } from "../data/reports";
import { reportKpis, monthlyRevenue, reportSummary, lineItems } from "../data/reportDetail";
import { formatDate } from "../utils/format";

export default function ReportDetail() {
  const { reportId } = useParams();
  const report = reports.find((item) => item.id === reportId);

  if (!report) {
    return (
      <div className="not-found">
        <h1 className="greeting__title">Report not found</h1>
        <Link to="/reports" className="btn btn--soft">Back to reports</Link>
      </div>
    );
  }

  return (
    <>
      <div className="detail-head">
        <Link to="/reports" className="icon-btn" aria-label="Back to reports">
          <ArrowLeft size={16} />
        </Link>

        <div>
          <h1 className="detail-head__title">{report.name}</h1>
          <p className="greeting__date">
            Last run: {formatDate(report.lastRun)} · {report.type} ·{" "}
            <span className="capitalize">{report.status}</span>
          </p>
        </div>

        <div className="detail-head__actions">
          <button className="btn btn--outline">Schedule</button>
          <button className="btn btn--primary">Share</button>
          <button className="btn btn--primary">Download</button>
        </div>
      </div>

      <section className="stats">
        {reportKpis.map((kpi) => (
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
        <Panel title="Revenue Breakdown" footer="Monthly revenue for Dec 2024">
          <RevenueBarChart data={monthlyRevenue} />
        </Panel>

        <Panel title="Report Summary">
          <ReportSummary items={reportSummary} status={report.status} />
        </Panel>
      </div>

      <Panel>
        <TransactionsTable rows={lineItems} />
      </Panel>
    </>
  );
}