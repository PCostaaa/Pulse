import { formatDate, getInitials } from "../utils/format";
import "./TransactionsTable.css";
import "./ReportsTable.css";
import "./UsersTable.css";

const regionStyles = {
    Americas: "tag--indigo",
    LATAM: "tag-green",
    Asia: "tag--amber",
    Europe: "",
};

export default function UsersTable({ users }) {
    return (
        <div className="table-wrap">
            <table className="table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Region</th>
                        <th>Sessions</th>
                        <th>Last seen</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <div className="table__person">
                                    <span className="table__avatar">{getInitials(user.name)}</span>
                                    {user.name}
                                </div>
                            </td>
                            <td>
                                <span className={`tag ${regionStyles[user.region] ?? ""}`}>{user.region}</span>
                            </td>
                            <td className="table__mono">{user.sessions}</td>
                            <td className="table__muted">{formatDate(user.lastSeen)}</td>
                            <td>
                                <button className="panel__menu" aria-label={`Actions for ${user.name}`}>
                                    ...
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}