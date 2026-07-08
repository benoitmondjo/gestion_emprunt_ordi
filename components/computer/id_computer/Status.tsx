
// Composant StatusBadge : affiche un badge coloré selon le statut
//   statut = "Disponible" | "En cours" | "Terminé"

type StatusProps = {
  statut: "Disponible" | "En cours" | "Terminé";
};

export default function Status({ statut }: StatusProps) {

  let couleur = "";

  if (statut === "Disponible") {
    couleur = "bg-teal-50 text-teal-600";
  }
  if (statut === "En cours") {
    couleur = "bg-teal-100 text-teal-700";
  }
  if (statut === "Terminé") {
    couleur = "bg-green-50 text-green-600";
  }

  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${couleur}`}>
      {statut === "Disponible" && <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />}
      {statut}
    </span>
  );
}
