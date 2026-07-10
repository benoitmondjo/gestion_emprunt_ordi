// On importe les icônes depuis react-icons
import { FiMonitor, FiCheckCircle, FiAlertTriangle, FiUsers } from "react-icons/fi";

// On définit le typage des props attendues
interface StatsEmpruntsProps {
  enCours: number;
  termines: number;
  enRetard: number;
  emprunteurs: number;
}

// Composant : 4 cartes résumant l'état global des emprunts
export default function StatsEmprunts({
  enCours,
  termines,
  enRetard,
  emprunteurs,
}: StatsEmpruntsProps) {
  const cards = [
    { label: "Emprunts en cours", value: enCours, color: "text-blue-500", bg: "bg-blue-50", icon: <FiMonitor className="w-5 h-5" /> },
    { label: "Emprunts terminés", value: termines, color: "text-green-500", bg: "bg-green-50", icon: <FiCheckCircle className="w-5 h-5" /> },
    { label: "Emprunts en retard", value: enRetard, color: "text-red-500", bg: "bg-red-50", icon: <FiAlertTriangle className="w-5 h-5" /> },
    { label: "Emprunteurs différents", value: emprunteurs, color: "text-purple-500", bg: "bg-purple-50", icon: <FiUsers className="w-5 h-5" /> },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {cards.map((card) => (
        <div
          key={card.label}
          className="flex items-center gap-3 border border-gray-200 rounded-xl p-4 bg-white"
        >
          <div className={`w-11 h-11 rounded-xl ${card.bg} ${card.color} flex items-center justify-center shrink-0`}>
            {card.icon}
          </div>
          <div>
            <p className="text-xl font-bold text-gray-900 font-roboto">{card.value}</p>
            <p className="text-xs text-(--texte-gray-1) font-inter">{card.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
