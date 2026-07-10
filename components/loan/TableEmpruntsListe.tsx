// On importe la ligne réutilisable du tableau
import TableEmpruntListeRow from "./TableEmpruntListeRow";
import { StatutEmprunt } from "./StatutEmpruntBadge";

// On définit le typage d'un emprunt
export interface Emprunt {
  id: string;
  emprunteur: string;
  role: string;
  ordinateur: string;
  numeroSerie: string;
  dateEmprunt: string;
  datePrevue: string;
  statut: StatutEmprunt;
}

// On définit le typage des props attendues
interface TableEmpruntsListeProps {
  emprunts: Emprunt[];
  onVoirClick?: (id: string) => void;
  onRetourClick?: (id: string) => void;
  onModifierClick?: (id: string) => void;
  onSupprimerClick?: (id: string) => void;
}

// Composant : tableau complet de la liste des emprunts
export default function TableEmpruntsListe({
  emprunts,
  onVoirClick,
  onRetourClick,
  onModifierClick,
  onSupprimerClick,
}: TableEmpruntsListeProps) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-xl">
      <table className="w-full min-w-225 table-fixed bg-white">
        <thead>
          <tr className="border-b border-gray-200 text-left bg-gray-50">
            <th className="w-36 py-3 px-2 text-xs font-medium text-(--texte-gray-1) font-inter">
              ID Emprunt
            </th>
            <th className="w-44 py-3 px-2 text-xs font-medium text-(--texte-gray-1) font-inter">
              Emprunteur
            </th>
            <th className="w-48 py-3 px-2 text-xs font-medium text-(--texte-gray-1) font-inter">
              Ordinateur
            </th>
            <th className="w-36 py-3 px-2 text-xs font-medium text-(--texte-gray-1) font-inter">
              Date d&apos;emprunt
            </th>
            <th className="w-36 py-3 px-2 text-xs font-medium text-(--texte-gray-1) font-inter">
              Date de retour prévue
            </th>
            <th className="w-32 py-3 px-2 text-xs font-medium text-(--texte-gray-1) font-inter">
              Statut
            </th>
            <th className="w-15 py-3 px-2 text-xs font-medium text-(--texte-gray-1) font-inter text-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {emprunts.map((emprunt) => (
            <TableEmpruntListeRow
              key={emprunt.id}
              {...emprunt}
              onVoirClick={() => onVoirClick?.(emprunt.id)}
              onRetourClick={() => onRetourClick?.(emprunt.id)}
              onModifierClick={() => onModifierClick?.(emprunt.id)}
              onSupprimerClick={() => onSupprimerClick?.(emprunt.id)}
            />
          ))}
          {emprunts.length === 0 && (
            <tr>
              <td colSpan={7} className="py-10 text-center text-sm text-(--texte-gray-1) font-inter">
                Aucun emprunt ne correspond à votre recherche.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
