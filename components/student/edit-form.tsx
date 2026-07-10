"use client";

import BtnFormAction from "@/components/ui/btn-action-form";
import Input from "@/components/ui/input-element";
import Select from "@/components/ui/select-element";
import { salles } from "@/lib/mock/classroom-data";

const genre = [
    {id:1, title:"masculin"},
    {id:2, title:"feminin"},
]

const classrooms = salles.map( (salle) => {
    return {
        id: salle.id,
        title: salle.nom
    }
} )

export default function FormEditStudent(){


    return(<div className="bg-white p-6 rounded-lg space-y-8">

        {/*Informations personnelles*/}
        <div>

            <h2 className="text-2xl font-semibold mb-6">
                Informations personnelles
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <Input label='Nom' />
                <Input label='Prenom' />
                <Input label='Date de naissance' type="date" />
                <Select label="Genre" optionsData={genre} />              
                <Input label="Telephone" type="tel" />
                <Input label="Email" type="email" />

            </div>

        </div>

        {/*Informations académiques*/}
        <div>
        
            <h2 className="text-2xl font-semibold mb-6">
                Informations académiques
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                <Input 
                    label="Matricule"
                    placeholder="Matricule"
                />

                <Select label="Salle" optionsData={classrooms} />

            </div>

        </div>

        <BtnFormAction label1="Modifier" label2="Annuler" />
        
    </div>)   
  
}
