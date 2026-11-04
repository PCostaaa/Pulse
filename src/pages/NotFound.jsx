import {Link} from "react-router";

export default function NotFount() {
    return (
        <div className="not-found">
            <h1 className="greeting__title">Page not found</h1>
            <p className="greeting__date">The page you're looking for does not exist.</p>
            <Link to="/" className="btn btn--soft">Back to dashboard</Link>
        </div>
    );
}