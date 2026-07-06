//On importe l'interface ApprenantDetail du composant Type
import { ApprenantDetail } from "./Type";

interface AcademicInfoProps {
    apprenant: ApprenantDetail;
}

// On affiche la section Informations académiques de la page de détails
export default function AcademicInfo({ apprenant }: AcademicInfoProps) {
    return (
        <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Informations académiques</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                    <p className="text-gray-1">Matricule</p>
                    <p className="font-medium text-gray-900">{apprenant.matricule}</p>
                </div>
                <div>
                    <p className="text-gray-1 mb-1">Groupe</p>
                    <select disabled defaultValue={apprenant.groupe} className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-900 w-full sm:w-auto">
                        <option>{apprenant.groupe}</option>
                    </select>
                </div>
            </div>
        </div>
    );
}