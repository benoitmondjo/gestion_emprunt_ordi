// On importe les icônes depuis react-icons
import {FiUsers, FiTag, FiLayers, FiCalendar, FiCheckCircle} from "react-icons/fi";

// On importe le type IconType pour typer l'icône principale reçue en prop
import type { IconType } from "react-icons";

// On importe le sous-composant réutilisable pour chaque item
import InfoItem from "./InfoItem";

// On définit le typage des props attendues
interface InfoBarSalleProps {
  icon: IconType; // Icône principale affichée dans le cercle à gauche
  capacite: number;
  type: string;
  etage: string;
  statut: string; // Le statut actif ou non
  creeeLe: string; // Date déjà formatée
}

// Composant : barre d'infos générales de la salle 
export default function InfoBarSalle({
  icon: Icon,
  capacite,
  type,
  etage,
  statut,
  creeeLe,
}: InfoBarSalleProps) {
  const isActive = statut.toLowerCase() === "active";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-6 border border-gray-200 rounded-xl p-6 mb-6">
      {/* Icône principale dans un cercle */}
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      {/* Les 5 items d'information, en grille responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-4 flex-1">
        <InfoItem icon={FiUsers} label="Capacité" value={`${capacite} places`} />
        <InfoItem icon={FiTag} label="Type" value={type} />
        <InfoItem icon={FiLayers} label="Étage" value={etage} />
        <InfoItem
          icon={FiCheckCircle}
          label="Statut"
          value={statut}
          valueClassName={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full font-inter ${
            isActive
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500"
          }`}
        />
        <InfoItem icon={FiCalendar} label="Créée le" value={creeeLe} />
      </div>
    </div>
  );
}