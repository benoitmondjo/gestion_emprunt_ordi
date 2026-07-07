// On définit le typage des props attendues
interface StatutBadgeProps {
  statut: "Disponible" | "Emprunté";
}

// Petit badge coloré selon le statut de l'ordinateur
export default function StatutBadge({ statut }: StatutBadgeProps) {
  const isDisponible = statut === "Disponible";

  return (
    <span
      className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full font-inter ${
        isDisponible
          ? "bg-green-100 text-green-700"
          : "bg-orange-100 text-orange-700"
      }`}
    >
      {statut}
    </span>
  );
}