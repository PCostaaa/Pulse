export function formatCurrency(value, decimals = 2) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimunFractionDigits: decimals,
        maximumFractionalDigits: decimals,
    }).format(value);
}

export function formatDate(isoDate) {
    return new Date(isoDate).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });
}

export function getInitials(name) {
    return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function formatCompact(value) {
    return new Intl.NumberFormat("en-US", {
        notation: "compact",
    maximumFractionDigits: 1,
    }).format(value);
}