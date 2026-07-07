// On importe les icônes depuis react-icons
import { FiMonitor, FiCast, FiSettings, FiMousePointer } from "react-icons/fi";

// On importe le sous-composant réutilisable pour chaque carte
import EquipementCard from "./EquipementCard";

// On définit le typage des props attendues
interface ResumeEquipementsProps {
  ordinateurs: number;
  ecranProjecteur: number;
  claviers: number;
  souris: number;
}

// Composant : bloc Résumé des équipements avec les 4 cartes
export default function ResumeEquipements({
  ordinateurs,
  ecranProjecteur,
  claviers,
  souris,
}: ResumeEquipementsProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6">
      <h2 className="text-primary font-semibold font-roboto mb-4">
        Résumé des équipements
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <EquipementCard
          icon={FiMonitor}
          iconBgColor="bg-violet-100"
          iconColor="text-violet-600"
          count={ordinateurs}
          label="Ordinateurs"
        />
        <EquipementCard
          icon={FiCast}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
          count={ecranProjecteur}
          label="Écran/Projecteur"
        />
        <EquipementCard
          icon={FiSettings}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
          count={claviers}
          label="Claviers"
        />
        <EquipementCard
          icon={FiMousePointer}
          iconBgColor="bg-orange-100"
          iconColor="text-orange-600"
          count={souris}
          label="Souris"
        />
      </div>
    </div>
  );
}