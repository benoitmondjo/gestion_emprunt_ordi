// On importe les icônes depuis react-icons
import {FiHash, FiType, FiHome, FiLayers, FiUsers, FiTag, FiCheckCircle, FiFileText} from "react-icons/fi";

// On importe le sous-composant réutilisable pour chaque ligne
import InfoRow from "./InfosRow";

// On définit le typage des props attendues
interface InformationsGeneralesProps {
  nom: string;
  code: string;
  batiment: string;
  etage: string;
  capacite: number;
  type: string;
  statut: string;
  description: string;
}

// Composant : bloc Informations générales avec la liste des champs de la salle
export default function InformationsGenerales({
  nom,
  code,
  batiment,
  etage,
  capacite,
  type,
  statut,
  description,
}: InformationsGeneralesProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6">
      <h2 className="text-primary font-semibold font-roboto mb-3">
        Informations générales
      </h2>
      <div>
        <InfoRow icon={FiType} label="Nom" value={nom} />
        <InfoRow icon={FiHash} label="Code" value={code} />
        <InfoRow icon={FiHome} label="Bâtiment" value={batiment} />
        <InfoRow icon={FiLayers} label="Étage" value={etage} />
        <InfoRow icon={FiUsers} label="Capacité" value={`${capacite} places`} />
        <InfoRow icon={FiTag} label="Type" value={type} />
        <InfoRow icon={FiCheckCircle} label="Statut" value={statut} />
        <InfoRow icon={FiFileText} label="Description" value={description} />
      </div>
    </div>
  );
}