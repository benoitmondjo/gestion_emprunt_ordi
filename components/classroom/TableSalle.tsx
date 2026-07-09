import Link from "next/link"; 
//On importe les icônes de la bibliothèque react-icon
import { FiEdit3, FiTrash2} from "react-icons/fi";
import { PiDoorOpen } from "react-icons/pi";

//On importe le style
import "@/style/globals.css"
import "tailwindcss";


//On définit la structure d'une salle
interface Salle {
    id : number;
    nom : string;
    formation : string;
    responsable : string;
    chefDeClasse : string;
    capacite : number;
    effectif : number;
    ordinateurs : number
}

//On définit la structure du Props
interface TableProps {
  salles: Salle[];
}

//Le composant Tableau des salles: il prend en paramètre le tableau des objets définis dans ./salle/page.tsx
export default function TableSalle({ salles }: TableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full font-inter table-fixed min-w-200">
                <thead>
                    <tr className="border-b border-gray-50 shadow">
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3 w-[15%] truncate">Nom de la salle</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3 w-[13%] truncate">Formation</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3 w-[15%] truncate">Responsable</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3 w-[15%] truncate">Chef de classe</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3 w-[10%] truncate">Capacité</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3 w-[10%] truncate">Effectif</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3 w-[13%] truncate">Ordinateurs</th>
                        <th className="text-left text-base font-bold text-gray-1 px-4 py-3 w-[13%] truncate">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {salles.map((salle) => (
                    <tr key={salle.id} className="border-b border-gray-50 shadow cursor-pointer hover:bg-gray-50 duration-500">
                        <td className="px-4 py-4 flex items-center gap-2 font-medium text-gray-900 min-w-0">
                            <PiDoorOpen className="bg-light text-primary p-1.5 rounded-md w-7 h-7 shrink-0"/>
                            <span className="truncate">{salle.nom}</span>
                        </td>
                        <td className="px-4 py-4 text-gray-1 truncate">{salle.formation}</td>
                        <td className="px-4 py-4 text-gray-1 truncate">{salle.responsable}</td>
                        <td className="px-4 py-4 text-gray-1 truncate">{salle.chefDeClasse}</td>
                        <td className="px-4 py-4 text-gray-1 truncate">{salle.capacite} place(s)</td>
                        <td className="px-4 py-4 text-gray-1 truncate">{salle.effectif}</td>
                        <td className="px-4 py-4 text-gray-1 truncate">{salle.ordinateurs} ordinateur(s)</td>
                        <td className="px-4 py-4">
                        <div className="flex gap-2">
                            <Link href={`/classroom/edit/${salle.id}`} className="p-2 rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100">
                                <FiEdit3 className="text-gray-1 w-4 h-4" />
                            </Link>
                            <button className="p-2 rounded-lg bg-red-50 cursor-pointer hover:bg-red-100">
                                <FiTrash2 className="text-red-500 w-4 h-4" />
                            </button>
                        </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}