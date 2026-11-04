import {Routes, Route} from "react-router";
import Layout from "./components/Layout";
import Overview from "./pages/Overview";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Audience from "./pages/Audience";
import Settings from "./pages/Settings";
import Integrations from "./pages/Integrations";
import NotFound from "./pages/NotFound";
import ReportDetail from "./pages/ReportDetail";
import Onboarding from "./pages/Onboarding";
import "./App.css";

export default function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
      <Route index element={<Overview/>} />
      <Route path="analytics" element={<Analytics/>} />
      <Route path="reports" element={<Reports/>} />
      <Route path="reports/:reportId" element={<ReportDetail />}/>
      <Route path="audience" element={<Audience/>} />
      <Route path="settings" element={<Settings/>} />
      <Route path="integrations" element={<Integrations/>} />
      <Route path="onboarding" element={<Onboarding />} />
      <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  );
}