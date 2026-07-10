// On définit le typage des props attendues
export type StatutEmprunt = "En cours" | "Terminé" | "En retard";

interface StatutEmpruntBadgeProps {
  statut: StatutEmprunt;
}

// Petit badge à puce colorée selon le statut de l'emprunt
export default function StatutEmpruntBadge({ statut }: StatutEmpruntBadgeProps) {
  const styles: Record<StatutEmprunt, string> = {
    "En cours": "text-blue-700 bg-blue-50",
    "Terminé": "text-green-700 bg-green-50",
    "En retard": "text-red-700 bg-red-50",
  };

  const dot: Record<StatutEmprunt, string> = {
    "En cours": "bg-blue-500",
    "Terminé": "bg-green-500",
    "En retard": "bg-red-500",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-0.5 rounded-full font-inter ${styles[statut]}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dot[statut]}`} />
      {statut}
    </span>
  );
}
