import Input from "@/components/ui/input-element";
import {ArrayOptionsType} from "@/components/ui/select-element";


const responsables: ArrayOptionsType =[
    {id:1, title: 'jean Bernard'},
    {id:2, title: 'Pierre Girauld'},
    {id:3, title: 'Jhone MABIKA'},
]

const EquipementsCapacite = () => {
  return (
    <div className="space-y-6">
      {/* Titre de section */}
      <h3 className="text-lg font-semibold text-gray-900">Équipements et capacité</h3>
      
      {/* Grille responsive : 1 colonne sur mobile, 2 colonnes sur desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
            {/* Champ Capacité */}
            <Input label="Capacité" type="number"  />

            {/* Champ effectif */}
            <Input label="Effectif" type="number"  />

            {/* Champ Ordinateurs */}
            <Input label="Total ordinateur affecté" type="number"  />

        </div>

      {/* 
        NOTE : Les équipements additionnels (Projecteur, Tableau blanc, etc.) 
        ont été supprimés conformément à la demande.
      */}
    </div>
  );
};

export default EquipementsCapacite;