import Input from "@/components/ui/input-element";
import Select from "@/components/ui/select-element";
import {ArrayOptionsType} from "@/components/ui/select-element";


const responsables: ArrayOptionsType =[
    {id:1, title: 'jean Bernard'},
    {id:2, title: 'Pierre Girauld'},
    {id:3, title: 'Jhone MABIKA'},
]

const formations: ArrayOptionsType =[
    {id:4, title: 'developpeur web'},
    {id:5, title: 'digital creator'},
    {id:6, title: 'marketing digital'},
]

const students: ArrayOptionsType = [

{id:1, title: 'developpeur web'},
    {id:7, title: 'mondjo'},
    {id:8, title: 'martial'},
    {id:9, title: 'Rony Gael'},
]

const InformationsGenerales = () => {

    return (
        <div className="space-y-6">

            {/* Titre de section */}
            <h3 className="text-xl font-semibold text-gray-900">Informations générales</h3>
            
            {/* Grille responsive : 1 colonne sur mobile, 2 colonnes sur desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* choix de la salle */}
                <Input label="Nom de la salle" />

                {/* choix du responsable de la salle */}
                <Select label="Responsable de la classe" optionsData={responsables} />

                {/* Champ Formation */}
                <Select label="Formation" optionsData={formations} />


                {/* Champ Chef de classe */}
                <Select label="Sélectionner un chef de classe" optionsData={students} />

            </div>

        </div>
    );

};

export default InformationsGenerales;