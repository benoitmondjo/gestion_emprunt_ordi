import SubNavigation from "@/components/Layouts/Subnavigation";
import FormEditStudent from "@/components/student/edit-form";
import {apprenants} from "@/lib/mock/student-data"

/**
 * Page pour modifier un  apprenant
 * @returns 
 */
export default async function ModifierApprenant ({params}: {params: Promise<{id:string}>}){
    const {id} = await params;

    const student = apprenants.find( student => student.id === Number(id))

    return(

        <main>
            <SubNavigation title="Modifier un apprenant" subTitle={`Modifier l'apprenant *${student?.nomComplet}*`} link={{label: 'Apprenant', url: '/student'}} />

            {/*Formulaire*/}
            <FormEditStudent />
        </main>
    )
}
