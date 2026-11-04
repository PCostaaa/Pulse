export const integrationTabs = ["All", "Connected", "Available"];

export const initialIntegrations = [
  { id: "google-analytics", name: "Google Analytics", category: "Analytics", description: "Import traffic and conversion data automatically.", connected: true, tone: "indigo" },
  { id: "stripe", name: "Stripe", category: "Payments", description: "Track revenue, refunds and subscriptions in real time.", connected: true, tone: "green" },
  { id: "slack", name: "Slack", category: "Communication", description: "Get report alerts and weekly digests in your channels.", connected: true, tone: "indigo" },
  { id: "hubspot", name: "HubSpot", category: "CRM", description: "Sync contacts and deals to measure customer journeys.", connected: false, tone: "indigo" },
  { id: "mailchimp", name: "Mailchimp", category: "Marketing", description: "Measure the impact of your email campaigns.", connected: false, tone: "green" },
  { id: "google-sheets", name: "Google Sheets", category: "Storage", description: "Export any report to a spreadsheet on a schedule.", connected: false, tone: "indigo" },
  { id: "segment", name: "Segment", category: "Data", description: "Send events from every source into Pulse.", connected: false, tone: "indigo" },
  { id: "zapier", name: "Zapier", category: "Automation", description: "Connect Pulse to 5,000+ apps without code.", connected: false, tone: "green" },
];