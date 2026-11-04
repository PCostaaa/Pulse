export const periods = [
    {id: "7d", label:"Last 7 days"},
    {id:"30d", label:"Last 30 days"},
    {id:"90d", label: "Last 90 days"},
];

export const kpisByPeriod = {
    "7d": [
        {
            id: "visitors",
            label: "Total visitors",
            value: "6,214",
            change: 3.8
        },

        {
            id: "users", label: "Active users",
            value:"2,105",
            change: -1.2
        },

        {
            id: "bounce", label: "Bounce rate",
            value: "44.1%",
            change: 1.3,
            inverse: true
        },

        {
            id:"session",
            label: "Avg. session", value: "3m 18s",
            change: 2.4
        },
    ],

    "30d": [
        {
            id: "visitors",
            label: "Total visitors",
            value: "24,981",
            change: 12.5
        },

        {
            id: "users", label: "Active users",
            value:"8,432",
            change: 4.2
        },

        {
            id: "bounce", label: "Bounce rate",
            value: "42.8%",
            change: -2.1,
            inverse: true
        },

        {
            id:"session",
            label: "Avg. session", value: "3m 42s",
            change: 12.5
        },
    ],

    "90d": [
        {
            id: "visitors",
            label: "Total visitors",
            value: "71,340",
            change: 18.9
        },

        {
            id: "users", label: "Active users",
            value:"21,876",
            change: 9.7
        },

        {
            id: "bounce", label: "Bounce rate",
            value: "41.2%",
            change: -4.6,
            inverse: true
        },

        {
            id:"session",
            label: "Avg. session", value: "3m 55s",
            change: 7.1
        },
    ],

}