// On importe l'icône d'ordinateur depuis react-icons
import { FiMonitor } from "react-icons/fi";
// On importe le badge de statut réutilisable
import StatutEmpruntBadge, { StatutEmprunt } from "./StatutEmpruntBadge";
// On importe le menu d'actions réutilisable
import ActionsMenu from "./ActionsMenu";

// On définit le typage des props attendues
interface TableEmpruntListeRowProps {
  id: string;
  emprunteur: string;
  role: string;
  ordinateur: string;
  numeroSerie: string;
  dateEmprunt: string;
  datePrevue: string;
  statut: StatutEmprunt;
  onVoirClick?: () => void;
  onRetourClick?: () => void;
  onModifierClick?: () => void;
  onSupprimerClick?: () => void;
}

// Une ligne du tableau de la liste des emprunts
export default function TableEmpruntListeRow({
  id,
  emprunteur,
  role,
  ordinateur,
  numeroSerie,
  dateEmprunt,
  datePrevue,
  statut,
  onVoirClick,
  onRetourClick,
  onModifierClick,
  onSupprimerClick,
}: TableEmpruntListeRowProps) {
  return (
    <tr className="border-b border-gray-100 last:border-0">
      <td className="w-36 py-3 px-2 text-sm font-medium text-gray-900 font-inter truncate">
        #{id}
      </td>
      <td className="w-44 py-3 px-2 truncate">
        <p className="text-sm font-medium text-gray-900 font-inter truncate">{emprunteur}</p>
        <p className="text-xs text-(--texte-gray-1) font-inter truncate">{role}</p>
      </td>
      <td className="w-48 py-3 px-2 truncate">
        <div className="flex items-center gap-2">
          <FiMonitor className="w-4 h-4 text-(--texte-gray-1) shrink-0" />
          <div className="min-w-0">
            <p className="text-sm text-gray-700 font-inter truncate">{ordinateur}</p>
            <p className="text-xs text-(--texte-gray-1) font-inter truncate">{numeroSerie}</p>
          </div>
        </div>
      </td>
      <td className="w-36 py-3 px-2 text-sm text-(--texte-gray-1) font-inter whitespace-nowrap">
        {dateEmprunt}
      </td>
      <td className="w-36 py-3 px-2 text-sm text-(--texte-gray-1) font-inter whitespace-nowrap">
        {datePrevue}
      </td>
      <td className="w-32 py-3 px-2">
        <StatutEmpruntBadge statut={statut} />
      </td>
      <td className="w-15 py-3 px-2 text-right">
        <ActionsMenu
          onVoirClick={onVoirClick}
          onRetourClick={onRetourClick}
          onModifierClick={onModifierClick}
          onSupprimerClick={onSupprimerClick}
        />
      </td>
    </tr>
  );
}
