export const initialSettings = {
    name: "Pedro Costa",
    email: "pedro@pulse.io",
    jobTitle: "Admin",
    username: "pedrocosta",
    language: "en-GB",
    timezone: "Europe/Lisbon",
    dateFormat: "DD/MM/YYYY",
    notifications: {
        reportReady: { email: true, inApp: true },
        weeklyDigest: { email: true, inApp: false },
        integrationError: { email: true, inApp: true },
        newMember: { email: false, inApp: true },
        productUpdates: { email: false, imApp: true },
    },
    quietHoursEnabled: true,
    quietFrom: "19:00",
    quietUntil: "08:00",
    twoFactorEnabled: false,
};

export const languages = [
    { value: "en-GB", label: "English (UK)" },
    { value: "en-US", label: "English (US)" },
    { value: "pt-PT", label: "Português (Portugal)" },
    { value: "es-ES", label: "Español" },
];

export const timezones = [
    { value: "Europe/Lisbon", label: "Europe/Lisbon (GMT+0)" },
    { value: "Europe/London", label: "Europe/London (GMT+0)" },
    { value: "Europe/Madrid", label: "Europe/madrid (GMT+1)" },
    { value: "American/New_York", label: "America/New York (GMT-5)" },
    { value: "Asia/Tokyo", label: "Asia/Tokyo (GMT+9)" },
];

export const dateFormats = [
    { value: "DD/MM/YYYY", label: "DD/MM/YYYY" },
    { value: "MM/DD/YYYY", label: "MM/DD/YYYY" },
    { value: "YYYY-MM-DD", label: "YYYY-MM-DD" },
];

export const notificationTypes = [
    { id: "reportReady", title: "Report ready", description: "When a scheduled report finishes generating." },
    { id: "weeklyDigest", title: "Weekly digest", description: "A summary of your key metrics every Monday." },
    { id: "integrationError", title: "Integration errors", description: "When a connected integration stops syncing." },
    { id: "newMember", title: "New team member", description: "When someone joins your workspace." },
    { id: "productUpdates", title: "Product updates", description: "New features and improvements to Pulse." },
];

export const hourOptions = Array.from({ length: 24 }, (_, hour) => {
    const value = `${String(hour).padStart(2, "0")}:00`;
    return { value, label: value };
})

export const initialSessions = [
    { id: 1, device: "Chrome on Windows", type: "desktop", location: "Lisbon, Portugal", lastActive: "Active now", current: true },
    { id: 2, device: "Safari on iPhone", type: "mobile", location: "Porto, Portugal", lastActive: "2 hours ago", current: false },
    { id: 3, device: "Firefox on macOS", type: "desktop", location: "Madrid, Spain", lastActive: "3 days ago", current: false },
];