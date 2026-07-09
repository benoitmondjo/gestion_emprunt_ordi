
import PageBreadcrumb from "@/components/classroom/PageBreadcrumb";
import InformationsGenerales from "@/components/classroom/InformationsGenerales";
import EquipementsCapacite from "@/components/classroom/EquipementsCapacite";
import FormActions from "@/components/classroom/FormActions";


/**
 * Page pour modifier une salle existante (classroom).
 *
 * Les valeurs initiales simulent des données pré-chargées comme si elles
 * venaient d'une API. Quand le backend sera connecté, on remplacera ces
 * valeurs statiques par un fetch dynamique : fetch(`/api/classrooms/${id}`)
 */
export default async function EditClassroom({params}: {params: Promise<{id:string}>}) {
  // Navigation : permet de rediriger l'utilisateur vers une autre page
  const id = await params;


  return (
    // Conteneur principal : centré, max-w-2xl sur mobile, max-w-3xl sur desktop
    <div className="font-inter max-w-2xl md:max-w-3xl mx-auto px-4 py-6 md:py-10">

      {/* Titre + fil d'Ariane "Salles > Modifier une salle" */}
      <PageBreadcrumb title="Modifier une salle" parent="Salles" />

      {/* Carte blanche contenant le formulaire */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-8">

        {/* Section 1 : Nom, Formation, Responsable, Chef de classe */}
        <InformationsGenerales
        
        />

        {/* Section 2 : Capacité + Ordinateurs
            NOTE : "Équipements additionnels" volontairement omis
            sur consigne du chef de projet (Benoît) */}
        <EquipementsCapacite
        
        />

        {/* Boutons Annuler / Enregistrer les modifications
            - Annuler : redirige vers la liste des salles
            - Enregistrer : pour l'instant log dans la console,
              sera remplacé par PUT /api/classrooms/:id quand
              le backend sera prêt */}
       

      </div>
    </div>
  );
}
