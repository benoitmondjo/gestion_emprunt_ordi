//On importe l'interface Emprunt du composant Type
import { Emprunt } from "./Type";

interface EmpruntHistoryProps {
    emprunts: Emprunt[];
}

//On affiche la section Historique des emprunts de la page de détails
export default function EmpruntHistory({ emprunts }: EmpruntHistoryProps) {
    return (
        <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Historique des emprunts</h2>
            <div className="divide-y divide-gray-100">
                {emprunts.length > 0 ? (
                    emprunts.map((emprunt) => (
                        <div key={emprunt.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 py-3 text-sm">
                            <span className="text-gray-900">
                                {emprunt.date} - {emprunt.designation}
                            </span>
                            <span className={emprunt.statut === "Actuellement emprunté" ? "text-orange-600 font-medium" : "text-gray-1"}>
                                {emprunt.statut}
                            </span>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-gray-1 py-3">Aucun emprunt enregistré.</p>
                )}
            </div>
        </div>
    );
}