
// Composant LoanOngoing : carte qui affiche l'emprunt en cours


import { FiRefreshCw, FiEye } from "react-icons/fi";

type LoanOngoingProps = {
  emprunteur: string;
  dateRetour: string;
  dateEmprunt: string;
  empruntId: string;
};

export default function LoanOngoing({ emprunteur, dateRetour, dateEmprunt, empruntId }: LoanOngoingProps) {
  return (
    <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">

      {/* Bandeau d'information */}
      <p className="mb-4 flex items-center gap-2 text-sm text-blue-600">
        <FiRefreshCw size={15} />
        Cet ordinateur est actuellement en prêt.
      </p>

      {/* Détails */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div>
          <p className="text-xs text-gray-400">Emprunté par</p>
          <p className="mt-0.5 text-sm font-semibold text-gray-800">{emprunteur}</p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Date de retour prévue</p>
          <p className="mt-0.5 text-sm font-semibold text-gray-800">{dateRetour}</p>
        </div>

        {/* Bouton voir les détails aligné à droite sur grand écran */}
        <div className="flex sm:justify-end">
          <button className="flex items-center gap-2 rounded-lg border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-600 hover:bg-teal-50">
            <FiEye size={15} />
            Voir les détails de l&apos;emprunt
          </button>
        </div>

        <div>
          <p className="text-xs text-gray-400">Date d&apos;emprunt</p>
          <p className="mt-0.5 text-sm font-semibold text-gray-800">{dateEmprunt}</p>
        </div>

        <div>
          <p className="text-xs text-gray-400">Emprunt ID</p>
          <p className="mt-0.5 text-sm font-semibold text-teal-600">{empruntId}</p>
        </div>

      </div>
    </div>
  );
}
