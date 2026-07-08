
// Composant LoanRow : Affiche une ligne du tableau des emprunts

import Status from "./Status";

type LoanRowProps = {
  id: string;
  emprunteur: string;
  dateEmprunt: string;
  dateRetour: string;
  statut: "En cours" | "Terminé";
};

export default function LoanRow({ id, emprunteur, dateEmprunt, dateRetour, statut }: LoanRowProps) {
  return (
    <tr className="border-t border-gray-100">
      <td className="px-4 py-3 text-sm font-semibold text-teal-600">{id}</td>
      <td className="px-4 py-3 text-sm text-gray-700">{emprunteur}</td>
      <td className="px-4 py-3 text-sm text-gray-700">{dateEmprunt}</td>
      <td className="px-4 py-3 text-sm text-gray-700">{dateRetour}</td>
      <td className="px-4 py-3">
        <Status statut={statut} />
      </td>
    </tr>
  );
}
