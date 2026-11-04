import { Link } from "react-router";
import { Download, Pencil, Ellipsis } from "lucide-react";
import { formatDate } from "../utils/format";
import "./TransactionsTable.css";
import "./ReportsTable.css";

export default function ReportsTable({ reports }) {
  if (reports.length === 0) {
    return <p className="empty-state">No reports in this view yet.</p>;
  }

  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Report name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Last run</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>
                <Link to={`/reports/${report.id}`} className="table__link">
                  {report.name}
                </Link>
              </td>
              <td>
                <span className="tag">{report.type}</span>
              </td>
              <td>
                <span className={`badge badge--${report.status}`}>{report.status}</span>
              </td>
              <td className="table__muted">{formatDate(report.lastRun)}</td>
              <td>
                <div className="table__actions">
                  <button className="icon-btn" aria-label={`Download ${report.name}`}>
                    <Download size={16} />
                  </button>
                  <button className="icon-btn" aria-label={`Edit ${report.name}`}>
                    <Pencil size={16} />
                  </button>
                  <button className="icon-btn" aria-label={`More options for ${report.name}`}>
                    <Ellipsis size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}