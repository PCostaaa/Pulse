import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { periods } from "../data/kpis";
import "./PeriodSelect.css";

export default function PeriodSelect({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const current = periods.find((period) => period.id === value);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event) {
      if (!wrapperRef.current.contains(event.target)) setIsOpen(false);
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleSelect(id) {
    onChange(id);
    setIsOpen(false);
  }

  return (
    <div className="period-select" ref={wrapperRef}>
      <button
        type="button"
        className="btn btn--outline period-select__trigger"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {current.label}
        <ChevronDown size={16} className="period-select__chevron" aria-hidden="true" />
      </button>

      {isOpen && (
        <ul className="period-select__menu" role="listbox" aria-label="Period">
          {periods.map((period) => {
            const isActive = period.id === value;
            return (
              <li key={period.id} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  className={`period-select__option ${isActive ? "period-select__option--active" : ""}`}
                  onClick={() => handleSelect(period.id)}
                >
                  {period.label}
                  {isActive && <Check size={14} aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}