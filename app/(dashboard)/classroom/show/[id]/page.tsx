
import { FiHome } from "react-icons/fi";

import SubNavigation from '@/components/Layouts/Subnavigation';
import InfoBarSalle from "@/components/classroom/InfoBarSalle";
import InformationsGeneralesClasse from "@/components/classroom/InformationsGeneralesClasse";
import ResumeEquipements from "@/components/classroom/ResumeEquipements";
import TableOrdinateurs from "@/components/computer/TableOrdinateurs";



/**
* Page pour voir les details d'une classe
 * @returns 
 */
export default async function ShowClassroom({params}: {params: Promise<{id:string}>}) {

    const {id} = await params;

    // Objet salle en attendant la BD
    const salle = {
        nom: "Salle 101",
        code: "S101",
        batiment: "Bâtiment A",
        etage: "1er étage",
        capacite: 30,
        type: "Salle de classe",
        statut: "Active",
        creeeLe: "12/03/2024",
        description: "Salle de cours équipée pour les formations et travaux pratiques.",
        equipements: {
        ordinateurs: 30,
        ecranProjecteur: 1,
        claviers: 30,
        souris: 30,
        },
    };

  return (
    <>
        <SubNavigation title={`Detail de la salle`} link={{label: 'Salle', url: '/classroom'}} subTitle={`Detail de la salle`} />
        
        <InfoBarSalle
            icon={FiHome}
            capacite={30}
            type="Salle de classe"
            etage="1er étage"
            statut="Active"
            creeeLe="12/03/2024"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <InformationsGeneralesClasse
                nom={salle.nom}
                code={salle.code}
                batiment={salle.batiment}
                etage={salle.etage}
                capacite={salle.capacite}
                type={salle.type}
                statut={salle.statut}
                description={salle.description}
            />

            <ResumeEquipements
                ordinateurs={salle.equipements.ordinateurs}
                ecranProjecteur={salle.equipements.ecranProjecteur}
                claviers={salle.equipements.claviers}
                souris={salle.equipements.souris}
            />
        </div>

        <TableOrdinateurs
            ordinateurs={[
                { code: "PC-101-01", nom: "PC-101-01", statut: "Disponible" },
                { code: "PC-101-02", nom: "PC-101-02", statut: "Disponible" },
                {
                    code: "PC-101-03",
                    nom: "PC-101-03",
                    statut: "Emprunté",
                    emprunteur: "Dupont Marie",
                    dateEmprunt: "21/05/2024",
                },
                { code: "PC-101-04", nom: "PC-101-04", statut: "Disponible" },
                { code: "PC-101-05", nom: "PC-101-05", statut: "Disponible" },
                {
                    code: "PC-101-03",
                    nom: "PC-101-03",
                    statut: "Emprunté",
                    emprunteur: "Clémence Boisier",
                    dateEmprunt: "10/05/2026",
                },
                
            ]}
        />
    </>
  );
}