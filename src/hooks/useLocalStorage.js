import { useEffect, useState } from "react";

export default function useLocalStorage( key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const stored = window.localStorage.getItem(key);
            if (stored !== null) return JSON.parse(stored);
        } catch {
            // DAdos inválidos ou localStorage indisponível: usamos o valor inicial
        }
        return typeof initialValue === "function" ? initialValue() : initialValue;
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch {
            // localStorage cheio ou indisponível: a app continua a funcionar
        }
    }, [key, value]);

    return [value, setValue];
}