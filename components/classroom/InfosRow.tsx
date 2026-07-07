// On importe le type IconType pour typer l'icône reçue en prop
import type { IconType } from "react-icons";

// On définit le typage des props attendues
interface InfoRowProps {
  icon: IconType; // Icône affichée devant le label
  label: string; // Pour Nom, Code, Bâtiment etc.
  value: string;
}

// Composant réutilisable : une ligne label, une valeur avec une icône
export default function InfoRow({ icon: Icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <span className="flex items-center gap-2 text-sm text-(--texte-gray-1) font-inter">
        <Icon className="w-4 h-4" />
        {label}
      </span>
      <span className="text-sm text-gray-900 font-medium font-inter text-right max-w-[60%]">
        {value}
      </span>
    </div>
  );
}