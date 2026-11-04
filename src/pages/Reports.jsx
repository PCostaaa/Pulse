import { useState } from "react";
import { Plus, SlidersHorizontal } from "lucide-react";
import Panel from "../components/Panel";
import SegmentedControl from "../components/SegmentedControl";
import ReportsTable from "../components/ReportsTable";
import { reports, reportTabs } from "../data/reports";

export default function Reports() {
    const [tab, setTab] = useState("All Reports");

    const visibleReports =
    tab === "All Reports" ? reports : reports.filter((report) => report.group === tab);

    return (
        <>
            <div className="page-intro">
                <div>
                    <h1 className="greeting__title">Reports</h1>
                    <p className="greeting__date">View, download and share your generated reports.</p>
                </div>
            </div>

            <div className="toolbar">
                <div className="toolbar__actions">
                    <button className="btn btn--primary">
                        <Plus size={16} /> New Report
                    </button>
                    <button className="btn btn--outline">
                        <SlidersHorizontal size={16} /> Filter
                    </button>
                </div>

                <SegmentedControl
                    options={reportTabs}
                    value={tab}
                    onChange={setTab}
                    label="Report status"
                    className="segmented--soft"
                />
            </div>

            <Panel>
                <ReportsTable reports={visibleReports} />
            </Panel>
        </>
    )
}