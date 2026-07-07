// On définit le type des statuts possibles pour un ordinateur
type Statut = "Disponible" | "En prêt" | "En maintenance" | "Hors service";

// On définit le typage des props attendues
interface StatutOrdinateurBadgeProps {
  statut: Statut;
}

// Couleurs associées à chaque statut (point et texte), Record sur une seule ligne
const statutConfig: Record<Statut, { dot: string; text: string }> = {
  Disponible: { dot: "bg-green-500", text: "text-green-700" },
  "En prêt": { dot: "bg-blue-500", text: "text-blue-700" },
  "En maintenance": { dot: "bg-orange-500", text: "text-orange-700" },
  "Hors service": { dot: "bg-red-500", text: "text-red-700" },
};

// Petit indicateur de statut : point coloré + texte
export default function StatutOrdinateurBadge({
  statut,
}: StatutOrdinateurBadgeProps) {
  const { dot, text } = statutConfig[statut];

  return (
    <span className={`inline-flex items-center gap-2 text-sm font-inter ${text}`}>
      <span className={`w-2 h-2 rounded-full ${dot}`} />
      {statut}
    </span>
  );
}