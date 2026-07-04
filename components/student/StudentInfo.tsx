// On importe l'interace ApprenantDetail du composant Type
import { ApprenantDetail } from "./Type";

interface PersonalInfoProps {
    apprenant: ApprenantDetail;
}

// Affiche la section Informations personnelles de la page de détails
export default function StudentInfo({ apprenant }: PersonalInfoProps) {
    return (
        <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Informations personnelles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <p className="text-gray-900">
                    <span className="text-gray-1">Prénom:</span> {apprenant.prenom}
                </p>
                <p className="text-gray-900">
                    <span className="text-gray-1">Nom:</span> {apprenant.nom}
                </p>
                <div>
                    <p className="text-gray-1">Date de naissance</p>
                    <p className="font-medium text-gray-900">{apprenant.dateNaissance}</p>
                </div>
                <div>
                    <p className="text-gray-1">Genre</p>
                    <p className="font-medium text-gray-900">{apprenant.genre}</p>
                </div>
                <div>
                    <p className="text-gray-1">Numéro de téléphone</p>
                    <p className="font-medium text-gray-900">{apprenant.telephone}</p>
                </div>
                <div>
                    <p className="text-gray-1">Email</p>
                    <p className="font-medium text-gray-900 break-all">{apprenant.email}</p>
                </div>
            </div>
        </div>
    );
}