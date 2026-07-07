// On importe les icônes depuis react-icons
import { FiEdit2, FiArrowLeft } from "react-icons/fi";
// On importe le type IconType pour typer l'icône reçue en prop
import type { IconType } from "react-icons";

// On définit le typage des props attendues
interface HeaderSalleDetailProps {
  icon: IconType; // Icône affichée dans le cercle
  title: string;
  subtitle: string;
  onModifierClick?: () => void; // Optionnel, pour  l'action du bouton Modifier
  onRetourClick?: () => void; // Optionnel, pour  l'action du bouton Retour à la liste
}

// Le composant header de détail : icône + titre/sous-titre à gauche, deux boutons d'action à droite
export default function HeaderSalleDetail({
  icon: Icon,
  title,
  subtitle,
  onModifierClick,
  onRetourClick,
}: HeaderSalleDetailProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
      {/* Partie gauche : icône dans un cercle + titre/sous-titre */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 font-roboto">
            {title}
          </h1>
          <p className="text-sm text-gray-1 font-inter">{subtitle}</p>
        </div>
      </div>

      {/* Partie droite : boutons Modifier et Retour à la liste */}
      <div className="flex items-center gap-3">
        <button
          onClick={onModifierClick}
          className="flex items-center gap-2 border border-gray-200 shadow-sm hover:bg-gray-50 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium font-inter cursor-pointer"
        >
          <FiEdit2 />
          Modifier
        </button>
        <button
          onClick={onRetourClick}
          className="flex items-center gap-2 bg-primary shadow hover:opacity-90 text-white px-4 py-2 rounded-lg text-sm font-medium font-inter cursor-pointer"
        >
          <FiArrowLeft />
          Retour à la liste
        </button>
      </div>
    </div>
  );
}