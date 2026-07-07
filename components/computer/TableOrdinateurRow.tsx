// On importe l'icône d'ordinateur depuis react-icons
import { FiMonitor } from "react-icons/fi";

// On importe next/link pour rendre le code cliquable
import Link from "next/link";

// On importe le badge de statut réutilisable
import StatutBadge from "./StatutBadge";

// On définit le typage des props attendues
interface TableOrdinateurRowProps {
  code: string;
  nom: string;
  statut: "Disponible" | "Emprunté";
  emprunteur?: string;
  dateEmprunt?: string;
}

// Une ligne du tableau des ordinateurs de la salle
export default function TableOrdinateurRow({
  code,
  nom,
  statut,
  emprunteur,
  dateEmprunt,
}: TableOrdinateurRowProps) {
  return (
    <tr className="border-b border-gray-100 last:border-0">
        <td className="w-30 py-3 px-2 truncate">
            <Link
            href={`/computer/${code}`}
            className="text-primary text-sm font-medium font-inter hover:underline truncate block"
            >
            {code}
            </Link>
        </td>
        <td className="w-40 py-3 px-2 truncate">
            <span className="flex items-center gap-2 text-sm text-gray-900 font-inter truncate">
            <FiMonitor className="w-4 h-4 text-(--texte-gray-1) shrink-0" />
            <span className="truncate">{nom}</span>
            </span>
        </td>
        <td className="w-30 py-3 px-2">
            <StatutBadge statut={statut} />
        </td>
        <td className="w-60 py-3 px-2 text-sm text-(--texte-gray-1) font-inter truncate">
            {emprunteur ? (
            <>
                <p className="truncate">Par {emprunteur}</p>
                <p className="text-xs truncate">Depuis le {dateEmprunt}</p>
            </>
            ) : (
            "—"
            )}
        </td>
    </tr>
  );
}