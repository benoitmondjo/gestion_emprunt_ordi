import SubNavigation from "@/components/Layouts/Subnavigation";
import FormCreateStudent from "@/components/student/create-form";

/**
 * Page pour créer un nouveau apprenant 
 * @returns 
 */



export default function AjouterApprenant (){

    return(

        <main>
            
            <SubNavigation title="Modifier un apprenant" subTitle="Modifier l'apprenant *" link={{label: 'Apprenant', url: '/student'}} />


            {/*Formulaire*/}
            <FormCreateStudent />

        </main>
    )
}
