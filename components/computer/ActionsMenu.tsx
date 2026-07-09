"use client";

// On importe useState/useRef/useEffect pour gérer l'ouverture et la fermeture au clic extérieur
import { useState, useRef, useEffect } from "react";

// On importe les icônes depuis react-icons
import { FiMoreVertical, FiEdit2, FiTrash2, FiEye } from "react-icons/fi";

// On définit le typage des props attendues
interface ActionsMenuProps {
  onVoirClick?: () => void;
  onModifierClick?: () => void;
  onSupprimerClick?: () => void;
}

// Menu déroulant d'actions  : Voir, Modifier, Supprimer
export default function ActionsMenu({
  onVoirClick,
  onModifierClick,
  onSupprimerClick,
}: ActionsMenuProps) {
  // État d'ouverture du menu
  const [isOpen, setIsOpen] = useState(false);
  // Référence sur le conteneur pour détecter les clics à l'extérieur
  const menuRef = useRef<HTMLDivElement>(null);

  // Ferme le menu si on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Petite fonction utilitaire pour fermer le menu après une action
  function handleAction(callback?: () => void) {
    setIsOpen(false);
    callback?.();
  }

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-(--texte-gray-1) hover:text-gray-900 cursor-pointer p-1"
      >
        <FiMoreVertical className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-1">
          <button
            onClick={() => handleAction(onVoirClick)}
            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 font-inter hover:bg-gray-50 cursor-pointer"
          >
            <FiEye className="w-4 h-4" />
            Voir
          </button>
          <button
            onClick={() => handleAction(onModifierClick)}
            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 font-inter hover:bg-gray-50 cursor-pointer"
          >
            <FiEdit2 className="w-4 h-4" />
            Modifier
          </button>
          <button
            onClick={() => handleAction(onSupprimerClick)}
            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-600 font-inter hover:bg-red-50 cursor-pointer"
          >
            <FiTrash2 className="w-4 h-4" />
            Supprimer
          </button>
        </div>
      )}
    </div>
  );
}