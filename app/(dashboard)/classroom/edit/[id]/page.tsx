import FormEditClassroom from "@/components/classroom/edit-form";
import SubNavigation from '@/components/Layouts/Subnavigation';


/**
 * Page pour modifier une salle existante (classroom).
 *
 * Les valeurs initiales simulent des données pré-chargées comme si elles
 * venaient d'une API. Quand le backend sera connecté, on remplacera ces
 * valeurs statiques par un fetch dynamique : fetch(`/api/classrooms/${id}`)
 */
export default async function EditClassroom({params}: {params: Promise<{id:string}>}) {
  const id = await params;


  return (
    <>
        {/* Titre + fil d'Ariane "Salles > Modifier une salle" */}
        <SubNavigation title='Modifier une salle' link={{label: 'Salle', url: '/classroom'}} subTitle='Modifier une salle' />

        {/* formulaire d'edition */}
        <FormEditClassroom />
    </>
  );
}
