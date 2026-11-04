import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Layout(){
    const [period, setPeriod] = useLocalStorage("pulse-period", "30d");
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        if (!isNavOpen) return;

        function handleKeyDown(event) {
            if (event.key === "Escape") setIsNavOpen(false);
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isNavOpen]);

    return (
        <div className="app">
            <Sidebar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />

            {isNavOpen && (
                <button
                    type="button"
                    className="sidebar-backdrop"
                    aria-label= "Close menu"
                    onClick={() => setIsNavOpen(false)}
                />
            )}

            <div className="app__main">
                <Header
                    period={period}
                    onPeriodChange={setPeriod}
                    onMenuClick={() => setIsNavOpen(true)}
                />

                <main className="app__content">
                    <Outlet context={{period}} />
                </main>
            </div>
        </div>
    )
}