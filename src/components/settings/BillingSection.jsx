import { useState } from "react";
import { CreditCard, Download } from "lucide-react";
import Panel from "../Panel";
import SegmentedControl from "../SegmentedControl";
import useLocalStorage from "../../hooks/useLocalStorage";
import { plans, usage, usageLabels, billingCycles, invoices } from "../../data/billing";
import { formatCurrency, formatDate } from "../../utils/format";
import "../TransactionsTable.css";

function getPrice(plan, cycle) {
    return cycle === "annual" ? Math.round(plan.monthly * 12 * 0.8) : plan.monthly;
}

function exceedsLimits(plan) {
    return Object.keys(usage).some((key) => usage[key] > plan.limits[key]);
}

function PlanOption ({ plan, cycle, isCurrent, onSelect }) {
    const blocked = exceedsLimits(plan);
    const price = getPrice(plan, cycle);

    return (
        <article className={`plan-option ${isCurrent ? "plan-option--current" : ""}`}>
            <strong className="plan-option__name">{plan.name}</strong>
            <p className="plan-option__price">
                {formatCurrency(price, 0)}
                <span>/{cycle === "Annual" ? "year" : "month"}</span>
            </p>
            <p className="plan-option__text">{plan.description}</p>

            {blocked && <p className="plan-option__warning">Your current usage exceeds this plan's limits.</p>}

            <button
                type="button"
                className={`btn btn-small ${isCurrent ? "btn--outline" : "btn-primary"}`}
                onClick={() => onSelect(plan.id)}
            >
                {isCurrent ? "Current plan" : `Switch to ${plan.name}`}
            </button>
        </article>
    );
}

function UsageMeter({ label, used, limit }) {
    const percent = Math.min((used / limit) * 100, 100);
    const isHigh = percent >= 80;

    return (
        <div className="usage">
            <div className="usage__head">
                <span>{label}</span>
                <span className="usage__members">
                    {used.toLocaleString("en-US")} / {limit.toLocaleString("en-US")}
                </span>
            </div>
            <div className="bar-list__track">
                <div
                    className={`bar-list__fill ${isHigh ? "usage__fill-high" : ""}`}
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    );
}

export default function BillingSection() {
    const [planId, setPlanId] = useLocalStorage("pulse-plan", "pro");
    const [cycle, setCycle] = useLocalStorage("pulse-billing-cycle", "Monthly");
    const [isChoosing, setIsChoosing] = useState(false);

    const currentPlan = plans.find((plan) => plan.id === planId);
    const price = getPrice(currentPlan, cycle);
    const renewal = cycle === "Annual" ? "Dec 12, 2025" : "Jan 12, 2025";

    function handleSelect(id) {
        setPlanId(id);
        setIsChoosing(false);
    }

    return (
        <Panel title="Billing">
            <div className="settings__form">
                <div className="plan-current">
                    <div>
                        <span-badge className="badge--active">Current plan</span-badge>
                        <h3 className="plan-current__name">{currentPlan.name}</h3>
                        <p className="greeting__date">
                            {formatCurrency(price, 0)} per {cycle === "Annual" ? "year" : "month"} · Renews on {renewal}
                        </p>
                    </div>
                    <button type="button" className="btn btn--outline" onClick={() => setIsChoosing((open) => !open)}>
                        {isChoosing ? "Close" : "Change plan"}
                    </button>
                </div>

                {isChoosing && (
                    <div className="plan-picker">
                        <SegmentedControl
                            options={billingCycles}
                            value={cycle}
                            onChange={setCycle}
                            label="Billing cycle"
                            className="segmented--soft"
                        />
                        <p className="greeting__date">Annual billing saves 20%.</p>

                        <div className="plan-picker__grid">
                            {plans.map((plan) => (
                                <PlanOption
                                    key={plan.id}
                                    plan={plan}
                                    cycle={cycle}
                                    isCurrent={plan.id === planId}
                                    onSelect={handleSelect}
                                />
                            ))}
                        </div>
                    </div>
                )}

                <h3 className="settings__subtitle">Usage this month</h3>
                <div className="usage-list">
                    {Object.keys(usage).map((key) => (
                        <UsageMeter
                            key={key}
                            label={usageLabels[key]}
                            used={usage[key]}
                            limit={currentPlan.limits[key]}
                        />
                    ))}
                </div>

                <h3 className="settings__subtitle">Payment method</h3>
                <div className="payment">
                    <span className="sessions__icon">
                        <CreditCard size={18} />
                    </span>
                    <div className="sessions__info">
                        <strong>Visa ending in 4242</strong>
                        <span>Expires 08/27</span>
                    </div>
                    <button type="button" className="btn btn--outline btn--small">Update</button>
                </div>

                <h3 className="settings__subtitle">Invoices</h3>
                <div className="table-wrap">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Invoice</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>
                                    <span className="visually-hidden">Download</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map((invoice) => (
                                <tr key={invoice.id}>
                                    <td className="table__mono">{invoice.id}</td>
                                    <td className="table__muted">{formatDate(invoice.date)}</td>
                                    <td className="table__mono">{formatCurrency(invoice.amount)}</td>
                                    <td>
                                        <span className="badge badge--active">Paid</span>
                                    </td>
                                    <td>
                                        <button type="button" className="icon-btn" aria-label={`Download ${invoice.id}`}>
                                            <Download size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Panel>
    );
}