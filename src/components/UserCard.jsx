import { Ellipsis } from "lucide-react";
import "./UserCard.css";

export default function UserCard() {
    return (
        <div className="user-card">
            <div className="user-card__avatar">PC</div>
            <div className="user-card__info">
                <p className="user-card__name">Pedro Costa</p>
                <span className="user-card__role">Admin</span>
            </div>
            <button className="icon-btn user-card__menu" aria-label="Account options">
                <Ellipsis size={16} />
            </button>
        </div>
    )
}