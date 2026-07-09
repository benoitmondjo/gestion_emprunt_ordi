// On importe les icônes depuis react-icons
import { FiSearch, FiFilter } from "react-icons/fi";

// On définit le typage des props attendues
interface FiltresOrdinateursProps {
  search: string;
  onSearchChange: (value: string) => void;
  categorie: string;
  onCategorieChange: (value: string) => void;
  statut: string;
  onStatutChange: (value: string) => void;
  onFiltresClick?: () => void; // Optionnel, pour ouvrir un panneau de filtres avancés
}

// Composant FiltreOrdinateurs constitué de : une barre de recherche, de filtres rapides (Catégorie, Statut) et d'un bouton Filtres
export default function FiltresOrdinateurs({
  search,
  onSearchChange,
  categorie,
  onCategorieChange,
  statut,
  onStatutChange,
  onFiltresClick,
}: FiltresOrdinateursProps) {
  return (
    <div className="flex flex-col md:flex-row gap-3 mb-4">
     {/* Champ de recherche */}
    <div className="flex-1 ">
        <label className="invisible block text-xs font-inter mb-1">Recherche</label>
        <div className="relative ">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-(--texte-gray-1)" />
            <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher un ordinateur..."
            className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
        </div>
    </div>

      {/* Select Catégorie */}
      <div>
        <label className="block text-xs text-(--texte-gray-1) font-inter mb-1">
          Catégorie
        </label>
        <select
          value={categorie}
          onChange={(e) => onCategorieChange(e.target.value)}
          className="w-full md:w-40 px-3 py-2.5 border border-gray-200 rounded-lg text-sm font-inter bg-white focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <option value="Tous">Tous</option>
          <option value="Portable">Portable</option>
          <option value="Fixe">Fixe</option>
        </select>
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
          <option value="Disponible">Disponible</option>
          <option value="En prêt">En prêt</option>
          <option value="En maintenance">En maintenance</option>
          <option value="Hors service">Hors service</option>
        </select>
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