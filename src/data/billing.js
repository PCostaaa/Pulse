export const plans = [
    {
        id: "starter",
        name: "Starter",
        monthly: 0,
        description: "For individuals getting started.",
        limits: { reports: 5, seats: 1, api: 1000 },
    },
    {
        id: "pro",
        name: "Pro",
        monthly: 49,
        description: "For growing teams that need more reports.",
        limits: { reports: 50, seats: 10, api: 10000 },
    },
    {
        id: "business",
        name: "Business",
        monthly: 129,
        description: "For companies with advanced analytics needs.",
        limits: { reports: 200, seats: 50, api: 100000 },
    },
];

export const usage = { reports: 18, seats: 4, api: 7200 };

export const usageLabels = {
    reports: "Reports",
    seats: "Team seats",
    api: "API calls",
};

export const billingCycles = ["Monthly", "Annual"];

export const invoices = [
    { id: "INV-0012", date: "2024-12-12", amount: 49 },
    { id: "INV-0011", date: "2024-11-12", amount: 49 },
    { id: "INV-0010", date: "2024-10-12", amount: 49 },
];