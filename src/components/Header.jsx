
import { useLocation } from "react-router";
import { mainNav, settingsNav, hiddenNav } from "../data/navigation";
import PeriodSelect from "./PeriodSelect";
import { Bell, Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "../context/theme";
import "./Header.css";

export default function Header({ period, onPeriodChange, onMenuClick }) {
    const { theme, toggleTheme } = useTheme();
    const {pathname} = useLocation();
    const current = [...mainNav, ...settingsNav, ...hiddenNav].find((item) => item.to === "/" ? pathname === "/" : pathname.startsWith(item.to));
    const title = current?.title ?? "Pulse";
    const showDataActions = current?.hasPeriod ?? false;

    return (
        <header className="header">
            <button className="icon-btn header__menu" onClick={onMenuClick} aria-label="Open menu">
                <Menu size={18} />
            </button>
            <h2 className="header__title">{title}</h2>

            <div className="header__actions">
                {showDataActions && (
                    <>
                    <PeriodSelect value={period} onChange={onPeriodChange}/>
                    <button className="btn btn--soft header__hide-mobile">Export</button>
                </>
                )}
                <button
                    className="icon-btn"
                    onClick={toggleTheme}
                    aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                    >
                    {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                <button className="icon-btn header__hide-mobile" aria-label="Notifications">
                    <Bell size={16} />
                </button>
                <span className="header__avatar">PC</span>
            </div>
        </header>
    );
}