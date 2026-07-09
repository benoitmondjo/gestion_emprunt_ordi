import FormCreateClassroom from '@/components/classroom/create-form';
import SubNavigation from '@/components/Layouts/Subnavigation';


/**
 * Page de création d'une nouvelle salle
 * Route : /classroom/create
 */
export default function CreateSallePage() {

  return (
    <div>
        <SubNavigation title='Ajouter une nouvelle salle' link={{label: 'Salle', url: '/classroom'}} subTitle='Ajouter une salle' />

        {/* formulaire pour ajouter une salle */}
        <FormCreateClassroom />
    </div>
  );
}
