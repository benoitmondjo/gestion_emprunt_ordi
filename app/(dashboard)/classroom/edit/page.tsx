"use client"; // Composant client car on utilise useState et useRouter (interactivité)

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageBreadcrumb from "@/components/salle/PageBreadcrumb";
import InformationsGenerales from "@/components/salle/InformationsGenerales";
import EquipementsCapacite from "@/components/salle/EquipementsCapacite";
import FormActions from "@/components/salle/FormActions";

/**
 * Page pour modifier une salle existante (classroom).
 *
 * Les valeurs initiales simulent des données pré-chargées comme si elles
 * venaient d'une API. Quand le backend sera connecté, on remplacera ces
 * valeurs statiques par un fetch dynamique : fetch(`/api/classrooms/${id}`)
 */
export default function EditClassroom() {
  // Navigation : permet de rediriger l'utilisateur vers une autre page
  const router = useRouter();

  // --- State pré-rempli avec les données existantes de la salle ---
  const [nom, setNom] = useState("Salle 103");
  const [formations, setFormations] = useState(["formation-a", "formation-b", "formation-c"]);
  const [responsable1, setResponsable1] = useState("pierre-dubois");
  const [responsable2, setResponsable2] = useState("isabelle-moreau");
  const [chefsDeClasse, setChefsDeClasse] = useState([
    "michel-faure", "marie-dubois", "marie-curie", "isabelle-noreau",
  ]);
  const [capacite, setCapacite] = useState(20);
  const [ordinateurs, setOrdinateurs] = useState(20);

  return (
    // Conteneur principal : centré, max-w-2xl sur mobile, max-w-3xl sur desktop
    <div className="font-inter max-w-2xl md:max-w-3xl mx-auto px-4 py-6 md:py-10">

      {/* Titre + fil d'Ariane "Salles > Modifier une salle" */}
      <PageBreadcrumb title="Modifier une salle" parent="Salles" />

      {/* Carte blanche contenant le formulaire */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-8">

        {/* Section 1 : Nom, Formation, Responsable, Chef de classe */}
        <InformationsGenerales
          nom={nom}
          onNomChange={setNom}
          formations={formations}
          onFormationsChange={setFormations}
          responsable1={responsable1}
          onResponsable1Change={setResponsable1}
          responsable2={responsable2}
          onResponsable2Change={setResponsable2}
          chefsDeClasse={chefsDeClasse}
          onChefsDeClasseChange={setChefsDeClasse}
        />

        {/* Section 2 : Capacité + Ordinateurs
            NOTE : "Équipements additionnels" volontairement omis
            sur consigne du chef de projet (Benoît) */}
        <EquipementsCapacite
          capacite={capacite}
          onCapaciteChange={setCapacite}
          ordinateurs={ordinateurs}
          onOrdinateursChange={setOrdinateurs}
        />

        {/* Boutons Annuler / Enregistrer les modifications
            - Annuler : redirige vers la liste des salles
            - Enregistrer : pour l'instant log dans la console,
              sera remplacé par PUT /api/classrooms/:id quand
              le backend sera prêt */}
        <FormActions
          labelConfirm="Enregistrer les modifications"
          onCancel={() => router.push("/classroom")}
          onConfirm={() => console.log("Modifications enregistrées", {
            nom, formations, responsable1,
            responsable2, chefsDeClasse, capacite, ordinateurs,
          })}
        />

      </div>
    </div>
  );
}