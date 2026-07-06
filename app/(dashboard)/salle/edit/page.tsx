"use client";

import { useState } from "react";
import PageBreadcrumb from "@/components/salle/PageBreadcrumb";
import InformationsGenerales from "@/components/salle/InformationsGenerales";
import EquipementsCapacite from "@/components/salle/EquipementsCapacite";
import FormActions from "@/components/salle/FormActions";

/**
 * Page pour modifier une salle existante.
 *
 * Les valeurs initiales simulent des données pré-chargées (comme si elles
 * venaient d'une API). Quand le backend sera connecté, on remplacera ces
 * valeurs statiques par un fetch dynamique (ex: fetch(`/api/salles/${id}`)).
 */
export default function EditSalle() {
  // Valeurs pré-remplies (données existantes de la salle à modifier)
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
    <div className="font-inter max-w-2xl md:max-w-3xl mx-auto px-4 py-6 md:py-10">
      <PageBreadcrumb title="Modifier une salle" parent="Salles" />

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-8">
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
        <EquipementsCapacite
          capacite={capacite}
          onCapaciteChange={setCapacite}
          ordinateurs={ordinateurs}
          onOrdinateursChange={setOrdinateurs}
        />
        {/*
          Boutons Annuler / Enregistrer les modifications.
          onConfirm : pour l'instant log les données dans la console,
          sera remplacé par un appel API (PUT /api/salles/:id) plus tard.
        */}
        <FormActions
          labelConfirm="Enregistrer les modifications"
          onCancel={() => console.log("Annulé")}
          onConfirm={() =>
            console.log("Modifications enregistrées", {
              nom, formations, responsable1,
              responsable2, chefsDeClasse, capacite, ordinateurs,
            })
          }
        />
      </div>
    </div>
  );
}