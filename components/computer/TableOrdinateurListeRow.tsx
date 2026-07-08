// On importe l'icône d'ordinateur depuis react-icons
import { FiMonitor } from "react-icons/fi";
// On importe next/link pour rendre le nom cliquable
import Link from "next/link";
// On importe le badge de statut réutilisable
import StatutOrdinateurBadge from "./StatutOrdinateurBadge";
// On importe le menu d'actions réutilisable
import ActionsMenu from "./ActionsMenu";

// On définit le type des statuts possibles pour un ordinateur
type Statut = "Disponible" | "En prêt" | "En maintenance" | "Hors service";

// On définit le typage des props attendues
interface TableOrdinateurListeRowProps {
  nom: string;
  categorie: string;
  numeroSerie: string;
  statut: Statut;
  localisation?: string;
  onVoirClick?: () => void;
  onModifierClick?: () => void;
  onSupprimerClick?: () => void;
}

// Une ligne du tableau de la liste des ordinateurs
export default function TableOrdinateurListeRow({
  nom,
  categorie,
  numeroSerie,
  statut,
  localisation,
  onVoirClick,
  onModifierClick,
  onSupprimerClick,
}: TableOrdinateurListeRowProps) {
  return (
    <tr className="border-b border-gray-100 last:border-0">
      <td className="w-40 py-3 px-2 truncate">
        <Link
          href={`/computer/${nom}`}
          className="flex items-center gap-2 text-sm font-medium font-inter text-gray-900 hover:text-primary truncate"
        >
          <FiMonitor className="w-4 h-4 text-(--texte-gray-1) shrink-0" />
          <span className="truncate">{nom}</span>
        </Link>
      </td>
      <td className="w-30 py-3 px-2 text-sm text-gray-700 font-inter truncate">
        {categorie}
      </td>
      <td className="w-45 py-3 px-2 text-sm text-gray-700 font-inter truncate">
        {numeroSerie}
      </td>
      <td className="w-37.5 py-3 px-2">
        <StatutOrdinateurBadge statut={statut} />
      </td>
      <td className="w-32.5 py-3 px-2 text-sm text-(--texte-gray-1) font-inter truncate">
        {localisation ?? "—"}
      </td>
      <td className="w-15 py-3 px-2 text-right">
        <ActionsMenu
          onVoirClick={onVoirClick}
          onModifierClick={onModifierClick}
          onSupprimerClick={onSupprimerClick}
        />
      </td>
    </tr>
  );
}