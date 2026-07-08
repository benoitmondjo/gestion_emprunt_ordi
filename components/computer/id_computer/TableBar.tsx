
// Composant TabBar : affiche les diférents onglets de navigation

type TableBarProps = {
  ongletActif: string;
};

export default function TableBar({ ongletActif }: TableBarProps) {
  return (
    <div className="flex gap-6 border-b border-gray-200 overflow-x-auto">

      <button className={`whitespace-nowrap pb-3 text-sm font-medium ${ongletActif === "Informations" ? "border-b-2 border-teal-500 text-teal-600" : "text-gray-500"}`}>
        Informations
      </button>

      <button className={`whitespace-nowrap pb-3 text-sm font-medium ${ongletActif === "Historique des emprunts" ? "border-b-2 border-teal-500 text-teal-600" : "text-gray-500"}`}>
        Historique des emprunts
      </button>

      <button className={`whitespace-nowrap pb-3 text-sm font-medium ${ongletActif === "Maintenance" ? "border-b-2 border-teal-500 text-teal-600" : "text-gray-500"}`}>
        Maintenance
      </button>

      <button className={`whitespace-nowrap pb-3 text-sm font-medium ${ongletActif === "Documents" ? "border-b-2 border-teal-500 text-teal-600" : "text-gray-500"}`}>
        Documents
      </button>

    </div>
  );
}
