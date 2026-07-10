"use client";

import InformationsGenerales from "@/components/classroom/InformationsGenerales";
import EquipementsCapacite from "@/components/classroom/EquipementsCapacite";
import BtnFormAction from "@/components/ui/btn-action-form";

export default function FormCreateClassroom(){


    return(<>
        <div className="font-inter">

            {/* Carte blanche contenant le formulaire */}
            <form className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-8">

                {/* Section 1 : Nom, Formation, Responsable, Chef de classe */}
                <InformationsGenerales />

                {/* Section 2 : Capacité + Ordinateurs
                    NOTE : "Équipements additionnels" volontairement omis
                    sur consigne du chef de projet (Benoît) 
                */}
                <EquipementsCapacite />

                {/* btn enregistrer et btn annuler */}
                <BtnFormAction label1="Ajouter" label2="Annuler" />
            </form>

        </div>
    </>)   
  
}
