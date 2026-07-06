"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Une option proposée dans le multi-select.
 */
interface MultiSelectOption {
  value: string;
  label: string;
}

/**
 * Props attendues par le composant MultiSelect.
 */
interface MultiSelectProps {
  /** Label optionnel affiché au-dessus du champ */
  label?: string;
  /** Liste des valeurs actuellement sélectionnées */
  values: string[];
  /** Fonction appelée à chaque ajout/retrait d'une option */
  onChange: (values: string[]) => void;
  /** Liste de toutes les options disponibles */
  options: MultiSelectOption[];
  /** Texte affiché quand rien n'est sélectionné */
  placeholder?: string;
}

/**
 * Champ multi-select réutilisable : un bouton qui ouvre un menu déroulant
 * avec des cases à cocher, permettant de sélectionner plusieurs options.
 * Composant contrôlé : values et onChange viennent du parent.
 */
export default function MultiSelect({
  label,
  values,
  onChange,
  options,
  placeholder = "Sélectionner...",
}: MultiSelectProps) {
<<<<<<< HEAD
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

=======
  // State local : menu ouvert ou fermé
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Ferme le menu si clic en dehors du composant
>>>>>>> e3f411d (feat: maquette Ajouter une nouvelle salle (composants, responsive))
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

<<<<<<< HEAD
=======
  /** Ajoute ou retire une valeur de la sélection */
>>>>>>> e3f411d (feat: maquette Ajouter une nouvelle salle (composants, responsive))
  function toggleValue(value: string) {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value));
    } else {
      onChange([...values, value]);
    }
  }

<<<<<<< HEAD
=======
  // Libellés des valeurs sélectionnées pour affichage dans le bouton
>>>>>>> e3f411d (feat: maquette Ajouter une nouvelle salle (composants, responsive))
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
<<<<<<< HEAD
=======

      {/* Bouton fermé : affiche les éléments sélectionnés ou le placeholder */}
>>>>>>> e3f411d (feat: maquette Ajouter une nouvelle salle (composants, responsive))
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

<<<<<<< HEAD
=======
      {/* Menu déroulant avec cases à cocher */}
>>>>>>> e3f411d (feat: maquette Ajouter une nouvelle salle (composants, responsive))
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