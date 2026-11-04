const yearly = [
    { label: "Jan", current: 5200, previous: 2100 },
    { label: "Feb", current: 8900, previous: 3800 },
    { label: "Mar", current: 10600, previous: 5600 },
    { label: "Apr", current: 14200, previous: 7200 },
    { label: "May", current: 12300, previous: 8100 },
    { label: "Jun", current: 15800, previous: 9800 },
    { label: "Jul", current: 17500, previous: 11600 },
    { label: "Ago", current: 16600, previous: 10700 },
    { label: "Sep", current: 18300, previous: 13200 },
    { label: "Oct", current: 19300, previous: 14200 },
    { label: "Nov", current: 20100, previous: 15100 },
    { label: "Dec", current: 21100, previous: 18900 },
];

export const trendsByRange = {
    "7d": [
        { label: "Mon", current: 640, previous: 520 },
        { label: "Tue", current: 710, previous: 560 },
        { label: "Wed", current: 690, previous: 600 },
        { label: "Thu", current: 780, previous: 610 },
        { label: "Fri", current: 820, previous: 650 },
        { label: "Sat", current: 560, previous: 480 },
        { label: "Sun", current: 610, previous: 500 },
    ],
    "30d": [
        { label: "Week 1", current: 4800, previous: 3900 },
        { label: "Week 2", current: 5100, previous: 4100 },
        { label: "Week 3", current: 5600, previous: 4300 },
        { label: "Week 4", current: 5900, previous: 4600 },
    ],
    "90d": yearly.slice(-3),
};

export const analyticsKpis = [
    {id: "views", label: "Page views", value: "184,291", change: 8.3},
    {id: "unique", label: "Unique visitors", value: "24,981", change: 12.5},
    {id: "time", label: "Avg. time on page", value: "4m 12s", change: -1.2},
];

export const topPages = [
    { label: "/home", value: 24100 },
    { label: "/pricing", value: 18800 },
    { label: "/blog", value: 15000 },
    { label: "/docs", value: 10900 },
    { label: "/about", value: 7200 },
];

export const devices = [
    { label: "Desktop", value: 65 },
    { label: "Mobile", value: 28 },
    { label: "Tablet", value: 7 },
];