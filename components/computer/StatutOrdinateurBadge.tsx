// On définit le type des statuts possibles pour un ordinateur
type Statut = "Disponible" | "En prêt" | "En maintenance" | "Hors service";

// On définit le typage des props attendues
interface StatutOrdinateurBadgeProps {
  statut: Statut;
}

// Couleurs associées à chaque statut (fond pâle, texte et point), Record sur une seule ligne
const statutConfig: Record<Statut, { bg: string; text: string; dot: string }> = {
  Disponible: { bg: "bg-green-100", text: "text-green-700", dot: "bg-green-500" },
  "En prêt": { bg: "bg-blue-100", text: "text-blue-700", dot: "bg-blue-500" },
  "En maintenance": { bg: "bg-orange-100", text: "text-orange-700", dot: "bg-orange-500" },
  "Hors service": { bg: "bg-red-100", text: "text-red-700", dot: "bg-red-500" },
};

// Badge de statut : fond pâle, point coloré et texte
export default function StatutOrdinateurBadge({
  statut,
}: StatutOrdinateurBadgeProps) {
  const { bg, text, dot } = statutConfig[statut];

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full font-inter ${bg} ${text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {statut}
    </span>
  );
}