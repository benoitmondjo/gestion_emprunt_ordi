// On importe la ligne réutilisable du tableau
import TableOrdinateurListeRow from "./TableOrdinateurListeRow";

// On définit le type des statuts possibles pour un ordinateur
type Statut = "Disponible" | "En prêt" | "En maintenance" | "Hors service";

// On définit le typage d'un ordinateur
interface Ordinateur {
  nom: string;
  categorie: string;
  numeroSerie: string;
  statut: Statut;
  localisation?: string;
}

// On définit le typage des props attendues
interface TableOrdinateursListeProps {
  ordinateurs: Ordinateur[];
  onVoirClick?: (nom: string) => void;
  onModifierClick?: (nom: string) => void;
  onSupprimerClick?: (nom: string) => void;
}

// Composant : tableau complet de la liste des ordinateurs
export default function TableOrdinateursListe({
  ordinateurs,
  onVoirClick,
  onModifierClick,
  onSupprimerClick,
}: TableOrdinateursListeProps) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-xl">
      <table className="w-full min-w-200 table-fixed">
        <thead>
          <tr className="border-b border-gray-200 text-left bg-gray-50">
            <th className="w-40 py-3 px-2 text-xs font-medium text-(--texte-gray-1) font-inter">
              Nom
            </th>
            <th className="w-30 py-3 px-2 text-xs font-medium text-(--texte-gray-1) font-inter">
              Catégorie
            </th>
            <th className="w-45 py-3 px-2 text-xs font-medium text-(--texte-gray-1) font-inter">
              Numéro de série
            </th>
            <th className="w-37.5 py-3 px-2 text-xs font-medium text-(--texte-gray-1) font-inter">
              Statut
            </th>
            <th className="w-32.5 py-3 px-2 text-xs font-medium text-(--texte-gray-1) font-inter">
              Localisation
            </th>
            <th className="w-15 py-3 px-2 text-xs font-medium text-(--texte-gray-1) font-inter text-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {ordinateurs.map((ordi) => (
            <TableOrdinateurListeRow
              key={ordi.nom}
              {...ordi}
              onVoirClick={() => onVoirClick?.(ordi.nom)}
              onModifierClick={() => onModifierClick?.(ordi.nom)}
              onSupprimerClick={() => onSupprimerClick?.(ordi.nom)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}