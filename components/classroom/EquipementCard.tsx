// On importe le type IconType pour typer l'icône reçue en prop
import type { IconType } from "react-icons";

// On définit le typage des props attendues
interface EquipementCardProps {
  icon: IconType;
  iconBgColor: string; 
  iconColor: string; 
  count: number;
  label: string; 
}

// Composant réutilisable : une carte équipement avec icône, nombre et label
export default function EquipementCard({
  icon: Icon,
  iconBgColor,
  iconColor,
  count,
  label,
}: EquipementCardProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center gap-2 ">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBgColor}`}
      >
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <p className="text-2xl font-bold text-gray-900 font-roboto">{count}</p>
      <p className="text-xs text-(--texte-gray-1) font-inter">{label}</p>
    </div>
  );
}