// On importe les icônes depuis react-icons
import { FiRepeat, FiPlus } from "react-icons/fi";

// On définit le typage des props attendues
interface HeaderEmpruntsProps {
  onNouvelEmpruntClick?: () => void; // Optionnel, pour brancher l'action du bouton plus tard
}

// Composant header constitué de : une icône, un titre/sous-titre à gauche, et un bouton d'action à droite
export default function HeaderEmprunts({
  onNouvelEmpruntClick,
}: HeaderEmpruntsProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <FiRepeat className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 font-roboto">
            Emprunts
          </h1>
          <p className="text-sm text-(--texte-gray-1) font-inter">
            Liste de tous les emprunts d&apos;ordinateurs
          </p>
        </div>
      </div>

      <button
        onClick={onNouvelEmpruntClick}
        className="flex items-center gap-2 bg-primary shadow hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-medium font-inter cursor-pointer shrink-0"
      >
        <FiPlus />
        Nouvel emprunt
      </button>
    </div>
  );
}
