import "./Panel.css";

export default function Panel({title, footer, className = "", children}) {
    return (
        <section className={`panel ${className}`}>
        {title && (
            <div className="panel__head">
                <h3 className="panel__title">{title}</h3>
                <button className="panel__menu" aria-label={`More options for ${title}`}>
                    ...
                </button>
            </div>
        )}

        {children}

        {footer && <p className="panel__footer">{footer}</p>}
    </section>
    );
}