"use client";

import { useEffect, useRef, useState } from "react";

interface MultiSelectOption {
  value: string;
  label: string;
}

interface MultiSelectProps {
  label?: string;
  values: string[];
  onChange: (values: string[]) => void;
  options: MultiSelectOption[];
  placeholder?: string;
}

export default function MultiSelect({
  label,
  values,
  onChange,
  options,
  placeholder = "Sélectionner...",
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleValue(value: string) {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value));
    } else {
      onChange([...values, value]);
    }
  }

  const selectedLabels = options
    .filter((opt) => values.includes(opt.value))
    .map((opt) => opt.label);

  return (
    <div ref={containerRef} className="relative">
      {label && (
        <label className="block text-sm font-medium text-(--texte-gray-1) mb-1">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 bg-white text-left focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <span className={selectedLabels.length ? "text-gray-900 truncate" : "text-gray-400 truncate"}>
          {selectedLabels.length ? selectedLabels.join(", ") : placeholder}
        </span>
        <span className="ml-2 text-gray-400 shrink-0">▾</span>
      </button>

      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-md max-h-56 overflow-auto">
          {options.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer text-sm"
            >
              <input
                type="checkbox"
                checked={values.includes(opt.value)}
                onChange={() => toggleValue(opt.value)}
                className="accent-primary"
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}