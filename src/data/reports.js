export const reportTabs = ["All Reports", "Scheduled", "Draft", "Archived"];

export const reports = [
    { id: "monthly-revenue", name: "Monthly Revenue Report", type: "Financial", status: "active", lastRun: "2024-12-12", group: "Scheduled" },
    { id: "user-acquisition", name: "User Acquisition Report", type: "Marketing", status: "active", lastRun: "2024-12-11", group: "Scheduled" },
    { id: "q4-performance", name: "Q4 Performance Summary", type: "Executive", status: "pending", lastRun: "2024-12-10", group: "Draft" },
    { id: "traffic-analysis", name: "Traffic Analysis Report", type: "Analytics", status: "active", lastRun: "2024-12-09", group: "SCheduled" },
    { id: "customer-churn", name: "Customer Churn Report", type: "CRM", status: "failed", lastRun: "2024-12-08", group: "Archived" },
    { id: "weekly-kpi", name: "Weekly KPI Dashboard", type: "Operations", status: "active", lastRun: "2024-12-07", group: "Scheduled" },
    { id: "ad-spend", name: "Ad Spend Report", type: "Marketing", status: "pending", lastRun: "2024-12-06", group: "Draft" },
    { id: "product-usage", name: "Product Usage Report", type: "Product", status: "active", lastRun: "2024-12-05", group: "Archived" },
];