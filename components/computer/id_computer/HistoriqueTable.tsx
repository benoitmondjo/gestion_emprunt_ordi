
// Composant HistoriqueTable :affiche le tableau complet de l'historique des emprunts

import LoanRow from "./LoanRow";

export default function HistoriqueTable() {
  return (
    <div>
      <h3 className="text-base font-bold text-gray-900">Historique des emprunts</h3>

      <div className="mt-3 overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-left">

          {/* En-têtes */}
          <thead className="bg-gray-50 text-xs font-semibold text-gray-500">
            <tr>
              <th className="px-4 py-3">ID Emprunt</th>
              <th className="px-4 py-3">Emprunteur</th>
              <th className="px-4 py-3">Date d&apos;emprunt</th>
              <th className="px-4 py-3">Date de retour</th>
              <th className="px-4 py-3">Statut</th>
            </tr>
          </thead>

          {/* Lignes */}
          <tbody className="bg-white">
            <LoanRow id="#EMP-2024-0156" emprunteur="Jean Dupont"    dateEmprunt="15/05/2024 10:30" dateRetour="22/05/2024 18:00" statut="En cours" />
            <LoanRow id="#EMP-2024-0140" emprunteur="Marie Martin"   dateEmprunt="28/04/2024 09:15" dateRetour="05/05/2024 17:00" statut="Terminé"  />
            <LoanRow id="#EMP-2024-0112" emprunteur="Lucas Bernard"  dateEmprunt="10/04/2024 11:00" dateRetour="17/04/2024 16:30" statut="Terminé"  />
            <LoanRow id="#EMP-2024-0088" emprunteur="Sophie Leroy"   dateEmprunt="20/03/2024 14:20" dateRetour="27/03/2024 18:00" statut="Terminé"  />
          </tbody>

        </table>
      </div>

      <button className="mt-4 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
        Voir tout l&apos;historique
      </button>
    </div>
  );
}
