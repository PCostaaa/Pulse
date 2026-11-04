import {NavLink} from "react-router";
import {mainNav, settingsNav} from "../data/navigation";
import UserCard from "./UserCard";
import  "./Sidebar.css";

function linkClass({isActive}) {
    return `sidebar__link ${isActive ? "sidebar__link--active" : ""}`;
}

export default function Sidebar({ isOpen, onClose }) {
    return (
        <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
            <div className="sidebar__logo">
                <span className="sidebar__logo-mark">P</span>
                <span className="sidebar__logo-text">PULSE</span>
            </div>

            <nav className="sidebar__nav">
                <p className="sidebar__label">Main</p>
                {mainNav.map((item) => {
                    const Icon = item.icon;
                    return (
                        <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass} onClick={onClose}>
                            <Icon size={16} />
                            {item.label}
                        </NavLink>
                    );
                })}

                <p className="sidebar__label">Settings</p>
                {settingsNav.map((item) => {
                    const Icon = item.icon;
                    return (
                    <NavLink key={item.to}
                    to={item.to}
                    end={item.to === "/"} className={linkClass}
                    onClick={onClose}
                    >
                        <Icon size={16} />
                        {item.label}
                    </NavLink>
                    );
                })}
            </nav>

            <UserCard/>
            </aside>
    );
}