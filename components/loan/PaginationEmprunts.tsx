// On importe les icônes de flèches depuis react-icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// On définit le typage des props attendues
interface PaginationEmpruntsProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

// Composant : pagination avec compteur et navigation par numéro de page
export default function PaginationEmprunts({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: PaginationEmpruntsProps) {
  // Calcul de la plage affichée, ex: "1 à 8 sur 32"
  const start = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-4">
      <p className="text-sm text-(--texte-gray-1) font-inter">
        Affichage de {start} à {end} sur {totalItems} emprunts
      </p>

      <div className="flex items-center gap-1.5">
        {/* Flèche précédent */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-gray-200 text-(--texte-gray-1) hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          <FiChevronLeft className="w-4 h-4" />
        </button>

        {/* Numéros de page */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-9 h-9 rounded-lg text-sm font-medium font-inter cursor-pointer ${
              page === currentPage
                ? "bg-primary/10 text-primary border border-primary"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Flèche suivant */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border border-gray-200 text-(--texte-gray-1) hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          <FiChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
