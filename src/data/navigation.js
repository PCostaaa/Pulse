import { House, ChartColumn, FileText, Users, Settings, Plug } from "lucide-react";

export const mainNav = [
  { to: "/", label: "Dashboard", title: "Overview", icon: House, hasPeriod: true },
  { to: "/analytics", label: "Analytics", title: "Analytics", icon: ChartColumn, hasPeriod: true },
  { to: "/reports", label: "Reports", title: "Reports", icon: FileText },
  { to: "/audience", label: "Audience", title: "Audience", icon: Users, hasPeriod: true },
];

export const settingsNav = [
  { to: "/settings", label: "Settings", title: "Settings", icon: Settings },
  { to: "/integrations", label: "Integrations", title: "Integrations", icon: Plug },
];

export const hiddenNav = [{ to: "/onboarding", title: "Welcome to Pulse" }];