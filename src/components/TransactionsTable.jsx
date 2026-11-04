import { formatCurrency, formatDate, getInitials} from "../utils/format";
import "./TransactionsTable.css";

export default function TransactionTable({rows}) {
    return (
        <div className="table-wrap">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Value</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {rows.map((row) => (
                        <tr key={row.id}>
                            <td>
                                <div className="table__person">
                                    <span className="table__avatar">{row.initials ?? getInitials(row.name)}</span>
                                    {row.name}
                                </div>
                            </td>
                            <td>
                                <span className={`badge badge--${row.status}`}>{row.status}</span>
                            </td>
                            <td className="table__mono">{formatCurrency(row.value)}</td>
                            <td className="table__muted">{formatDate(row.date)}</td>
                            <td>
                                <button className="panel__menu" aria-label={`Actions for ${row.name}`}>
                                    ...
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}