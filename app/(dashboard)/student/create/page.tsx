/**
 * Page pour créer un nouveau apprenant 
 * @returns 
 */


import PageTitle from "@/components/student/create&edit/PageTitle"
import Formulaire from "@/components/student/create&edit/Formulaire"
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
