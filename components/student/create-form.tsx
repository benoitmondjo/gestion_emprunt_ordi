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

export default function FormCreateStudent(){


    return(<div className="bg-white p-6 rounded-lg space-y-8">

        {/*Informations personnelles*/}
        <div>

            <h2 className="text-2xl font-semibold mb-6">
                Informations personnelles
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <Input label='Nom' placeholder="ex: mondjo mondjo" />
                <Input label='Prenom' placeholder="ex: glaine benoit" />
                <Input label='Date de naissance' type="date" />
                <Select label="Genre" optionsData={genre} />              
                <Input label="Telephone" type="tel" placeholder="+241 0000-8888-9999" />
                <Input label="Email" type="email" placeholder="email@gmail.fr" />

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
                    placeholder="MT-125"
                />

                <Select label="Salle" optionsData={classrooms} />

            </div>

        </div>

        <BtnFormAction label1="Créer" label2="Annuler" />
        
    </div>)   
  
}
