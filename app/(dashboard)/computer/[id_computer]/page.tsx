/**
 * Page pour voir les details d'un ordinateur
 * @returns 
 */


import { FiArrowLeft, FiEdit2, FiChevronDown } from "react-icons/fi";

import Breadcrumb from "@/components/computer/id_computer/Breadcrumb";
import InfoField from "@/components/computer/id_computer/InfoField";
import Status from "@/components/computer/id_computer/Status";
import TabBar from "@/components/computer/id_computer/TableBar";
import LoanOngoing from "@/components/computer/id_computer/LoanOngoing";
import HistoriqueTable from "@/components/computer/id_computer/HistoriqueTable";


export default function ShowComputer() {
    return (<>

     <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-8">

      {/* Fil d'ariane */}
      <Breadcrumb items={["Accueil", "Ordinateurs", "PC-001"]} />

      {/* En-tête : titre + boutons */}
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
            <FiArrowLeft size={16} />
            Retour
          </button>
          <h1 className="text-xl font-bold text-gray-900">Détails de l&apos;ordinateur</h1>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
            <FiEdit2 size={15} />
            Modifier
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700">
            Actions
            <FiChevronDown size={15} />
          </button>
        </div>

      </div>

      {/* Carte principale */}
      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">

        {/* Photo + infos */}
        <div className="flex flex-col gap-6 sm:flex-row">

          {/* Photo */}
          <div className="flex h-44 w-52 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xs text-gray-400">
            image ordinateur
          </div>

          {/* Infos */}
          <div className="flex-1">

            {/* Nom + badge */}
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-900">PC-001</h2>
              <Status statut="Disponible" />
            </div>

            {/* Grille d'informations */}
            <div className="mt-5 grid grid-cols-1 gap-x-12 gap-y-5 sm:grid-cols-2">
              <InfoField label="Catégorie"              value="Portable" />
              <InfoField label="Localisation"           value="Salle Info 1" />
              <InfoField label="Marque / Modèle"        value="Lenovo ThinkPad E14" />
              <InfoField label="Système d'exploitation" value="Windows 11 Pro" />
              <InfoField label="N° de série"            value="SN-LEN-2024-0001" />
              <InfoField label="Mémoire (RAM)"          value="16 Go" />
              <InfoField label="Date d'achat"           value="12/03/2024" />
              <InfoField label="Stockage"               value="512 Go SSD" />
            </div>

          </div>
        </div>

        {/* Onglets */}
        <div className="mt-8">
          <TabBar ongletActif="Historique des emprunts" />
        </div>

        {/* Contenu de l'onglet */}
        <div className="mt-6 space-y-8">

          {/* Emprunt en cours */}
          <div>
            <h3 className="mb-3 text-base font-bold text-gray-900">Emprunt en cours</h3>
            <LoanOngoing
              emprunteur="Jean Dupont (étudiant)"
              dateRetour="22/05/2024 à 18:00"
              dateEmprunt="15/05/2024 à 10:30"
              empruntId="#EMP-2024-0156"
            />
          </div>

          {/* Tableau historique */}
          <HistoriqueTable />

        </div>
      </div>
    </div>
    
    </>);
}
