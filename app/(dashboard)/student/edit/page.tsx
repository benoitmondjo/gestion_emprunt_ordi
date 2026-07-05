/**
 * Page pour modifier un  apprenant
 * @returns 
 */




import PageTitle from "@/components/student/create&edit/PageTitle"
import Formulaire from "@/components/student/create&edit/Formulaire"
import "@/style/globals.css"

export default function ModifierApprenant (){

    return(

        <main className="p-10 bg-gray-100 min-h-screen">

            {/*Titre*/}

            <PageTitle 
            title="Modifier un apprenant"
            
            />

            {/*Formulaire*/}

            <Formulaire buttonText="Enrégistrer les modifications"/>


        </main>
    )
}
