// On importe le type IconType pour typer l'icône reçue en prop
import type { IconType } from "react-icons";

// On définit le typage des props attendues
interface InfoItemProps {
  icon: IconType; // Icône affichée devant le label
  label: string; // Pour : Capacité, Type, Étage etc.
  value: string; // La valeur affichée
  valueClassName?: string; // Optionnel, pour styliser différemment
}

// Composant réutilisable : icône, label gris et valeur
export default function InfoItem({
  icon: Icon,
  label,
  value,
  valueClassName,
}: InfoItemProps) {
  return (
    <div>
      <p className="flex items-center gap-1.5 text-xs text-(--texte-gray-1) font-inter mb-1 ">
        <Icon className="w-3.5 h-3.5" />
        {label}
      </p>
      <p
        className={
          valueClassName ??
          "text-sm font-medium text-gray-900 font-inter"
        }
      >
        {value}
      </p>
    </div>
  );
}