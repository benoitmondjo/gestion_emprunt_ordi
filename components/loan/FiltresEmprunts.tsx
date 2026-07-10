// On importe les icônes depuis react-icons
import { FiSearch, FiFilter, FiCalendar } from "react-icons/fi";

// On définit le typage des props attendues
interface FiltresEmpruntsProps {
  search: string;
  onSearchChange: (value: string) => void;
  statut: string;
  onStatutChange: (value: string) => void;
  dateDebut: string;
  onDateDebutChange: (value: string) => void;
  dateRetourPrevue: string;
  onDateRetourPrevueChange: (value: string) => void;
  onFiltresClick?: () => void; // Optionnel, pour ouvrir un panneau de filtres avancés
}

// Composant FiltresEmprunts constitué de : une barre de recherche, des filtres rapides (Statut, dates) et d'un bouton Filtres
export default function FiltresEmprunts({
  search,
  onSearchChange,
  statut,
  onStatutChange,
  dateDebut,
  onDateDebutChange,
  dateRetourPrevue,
  onDateRetourPrevueChange,
  onFiltresClick,
}: FiltresEmpruntsProps) {
  return (
    <div className="flex flex-col md:flex-row gap-3 mb-4">
      {/* Champ de recherche */}
      <div className="flex-1">
        <label className="invisible block text-xs font-inter mb-1">Recherche</label>
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-(--texte-gray-1)" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher un emprunteur, un ordinateur..."
            className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        </div>
      </div>

      {/* Select Statut */}
      <div>
        <label className="block text-xs text-(--texte-gray-1) font-inter mb-1">
          Statut
        </label>
        <select
          value={statut}
          onChange={(e) => onStatutChange(e.target.value)}
          className="w-full md:w-40 px-3 py-2.5 border border-gray-200 rounded-lg text-sm font-inter bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <option value="Tous">Tous</option>
          <option value="En cours">En cours</option>
          <option value="Terminé">Terminé</option>
          <option value="En retard">En retard</option>
        </select>
      </div>

      {/* Date de début */}
      <div>
        <label className="block text-xs text-(--texte-gray-1) font-inter mb-1">
          Date de début
        </label>
        <div className="relative">
          <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-(--texte-gray-1) pointer-events-none" />
          <input
            type="date"
            value={dateDebut}
            onChange={(e) => onDateDebutChange(e.target.value)}
            className="w-full md:w-44 pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm font-inter bg-white text-(--texte-gray-1) focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      {/* Date de retour prévue */}
      <div>
        <label className="block text-xs text-(--texte-gray-1) font-inter mb-1">
          Date de retour prévue
        </label>
        <div className="relative">
          <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-(--texte-gray-1) pointer-events-none" />
          <input
            type="date"
            value={dateRetourPrevue}
            onChange={(e) => onDateRetourPrevueChange(e.target.value)}
            className="w-full md:w-44 pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm font-inter bg-white text-(--texte-gray-1) focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      {/* Bouton Filtres */}
      <button
        onClick={onFiltresClick}
        className="flex items-center gap-2 border border-gray-200 shadow-sm hover:bg-gray-50 text-gray-900 px-4 py-2.5 rounded-lg text-sm font-medium font-inter cursor-pointer self-end"
      >
        <FiFilter />
        Filtres
      </button>
    </div>
  );
}
