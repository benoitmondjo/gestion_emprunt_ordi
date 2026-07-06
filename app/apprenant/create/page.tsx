

import PageTitle from "@/components/apprenant/create/PageTitle"
import Formulaire from "@/components/apprenant/create/Formulaire"
import "@/style/globals.css"

export default function AjouterApprenant (){

    return(

        <main className="p-10 bg-gray-100 min-h-screen">

            {/*Titre*/}

            <PageTitle 
            title="Ajouter un apprenant"
        
            />

            {/*Formulaire*/}

            <Formulaire buttonText="Confirmer"/>


        </main>
    )
}