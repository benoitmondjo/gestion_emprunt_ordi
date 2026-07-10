"use client";

import { useState, useMemo } from "react";
import HeaderEmprunts from "@/components/loan/HeaderEmprunts";
import FiltresEmprunts from "@/components/loan/FiltresEmprunts";
import TableEmpruntsListe, { Emprunt } from "@/components/loan/TableEmpruntsListe";
import PaginationEmprunts from "@/components/loan/PaginationEmprunts";
import StatsEmprunts from "@/components/loan/StatsEmprunts";

/**
 * Page qui affiche tous les emprunts d'ordinateurs
 * @returns
 */

// Données mockées en attendant le branchement API/Prisma
const tousLesEmprunts: Emprunt[] = [
  { id: "EMP-2024-0156", emprunteur: "Jean Dupont", role: "Étudiant", ordinateur: "PC-001", numeroSerie: "SN-LEN-2024-0001", dateEmprunt: "15/05/2024 10:30", datePrevue: "22/05/2024 18:00", statut: "En cours" },
  { id: "EMP-2024-0155", emprunteur: "Marie Martin", role: "Enseignante", ordinateur: "PC-002", numeroSerie: "SN-LEN-2024-0002", dateEmprunt: "28/04/2024 09:15", datePrevue: "05/05/2024 17:00", statut: "Terminé" },
  { id: "EMP-2024-0154", emprunteur: "Lucas Bernard", role: "Étudiant", ordinateur: "PC-003", numeroSerie: "SN-HP-2024-0003", dateEmprunt: "10/04/2024 11:00", datePrevue: "17/04/2024 16:30", statut: "Terminé" },
  { id: "EMP-2024-0153", emprunteur: "Sophie Leroy", role: "Personnel", ordinateur: "PC-004", numeroSerie: "SN-DELL-2024-0004", dateEmprunt: "20/03/2024 14:20", datePrevue: "27/03/2024 18:00", statut: "Terminé" },
  { id: "EMP-2024-0152", emprunteur: "Thomas Petit", role: "Étudiant", ordinateur: "PC-005", numeroSerie: "SN-HP-2024-0005", dateEmprunt: "18/05/2024 09:00", datePrevue: "25/05/2024 17:00", statut: "En cours" },
  { id: "EMP-2024-0151", emprunteur: "Camille Durand", role: "Enseignante", ordinateur: "PC-006", numeroSerie: "SN-LEN-2024-0006", dateEmprunt: "17/05/2024 16:45", datePrevue: "24/05/2024 18:00", statut: "En cours" },
  { id: "EMP-2024-0150", emprunteur: "Antoine Moreau", role: "Étudiant", ordinateur: "PC-007", numeroSerie: "SN-ASUS-2024-0007", dateEmprunt: "01/05/2024 13:30", datePrevue: "08/05/2024 17:00", statut: "Terminé" },
  { id: "EMP-2024-0149", emprunteur: "Julie Fontaine", role: "Personnel", ordinateur: "PC-008", numeroSerie: "SN-HP-2024-0008", dateEmprunt: "29/04/2024 10:20", datePrevue: "06/05/2024 17:00", statut: "En retard" },
  { id: "EMP-2024-0148", emprunteur: "Nicolas Girard", role: "Étudiant", ordinateur: "PC-009", numeroSerie: "SN-LEN-2024-0009", dateEmprunt: "27/04/2024 08:45", datePrevue: "04/05/2024 17:00", statut: "Terminé" },
  { id: "EMP-2024-0147", emprunteur: "Elodie Rousseau", role: "Étudiante", ordinateur: "PC-010", numeroSerie: "SN-DELL-2024-0010", dateEmprunt: "26/04/2024 09:30", datePrevue: "03/05/2024 17:00", statut: "Terminé" },
  { id: "EMP-2024-0146", emprunteur: "Maxime Lefebvre", role: "Personnel", ordinateur: "PC-011", numeroSerie: "SN-HP-2024-0011", dateEmprunt: "24/04/2024 15:00", datePrevue: "01/05/2024 17:00", statut: "Terminé" },
  { id: "EMP-2024-0145", emprunteur: "Laura Simon", role: "Étudiante", ordinateur: "PC-012", numeroSerie: "SN-ASUS-2024-0012", dateEmprunt: "22/04/2024 11:15", datePrevue: "29/04/2024 17:00", statut: "En retard" },
  { id: "EMP-2024-0144", emprunteur: "Hugo Michel", role: "Étudiant", ordinateur: "PC-013", numeroSerie: "SN-LEN-2024-0013", dateEmprunt: "20/05/2024 09:45", datePrevue: "27/05/2024 18:00", statut: "En cours" },
  { id: "EMP-2024-0143", emprunteur: "Manon Garcia", role: "Enseignante", ordinateur: "PC-014", numeroSerie: "SN-DELL-2024-0014", dateEmprunt: "19/05/2024 14:00", datePrevue: "26/05/2024 18:00", statut: "En cours" },
  { id: "EMP-2024-0142", emprunteur: "Alexandre David", role: "Étudiant", ordinateur: "PC-015", numeroSerie: "SN-HP-2024-0015", dateEmprunt: "16/05/2024 10:00", datePrevue: "23/05/2024 17:00", statut: "En cours" },
  { id: "EMP-2024-0141", emprunteur: "Chloé Bertrand", role: "Personnel", ordinateur: "PC-016", numeroSerie: "SN-ASUS-2024-0016", dateEmprunt: "14/05/2024 13:15", datePrevue: "21/05/2024 17:00", statut: "En cours" },
  { id: "EMP-2024-0140", emprunteur: "Baptiste Roux", role: "Étudiant", ordinateur: "PC-017", numeroSerie: "SN-LEN-2024-0017", dateEmprunt: "05/04/2024 09:00", datePrevue: "12/04/2024 17:00", statut: "Terminé" },
  { id: "EMP-2024-0139", emprunteur: "Sarah Vincent", role: "Étudiante", ordinateur: "PC-018", numeroSerie: "SN-DELL-2024-0018", dateEmprunt: "03/04/2024 10:30", datePrevue: "10/04/2024 17:00", statut: "Terminé" },
  { id: "EMP-2024-0138", emprunteur: "Louis Fournier", role: "Enseignant", ordinateur: "PC-019", numeroSerie: "SN-HP-2024-0019", dateEmprunt: "01/04/2024 08:30", datePrevue: "08/04/2024 17:00", statut: "Terminé" },
  { id: "EMP-2024-0137", emprunteur: "Emma Morel", role: "Étudiante", ordinateur: "PC-020", numeroSerie: "SN-ASUS-2024-0020", dateEmprunt: "29/03/2024 11:45", datePrevue: "05/04/2024 17:00", statut: "Terminé" },
  { id: "EMP-2024-0136", emprunteur: "Gabriel Andre", role: "Personnel", ordinateur: "PC-021", numeroSerie: "SN-LEN-2024-0021", dateEmprunt: "27/03/2024 09:15", datePrevue: "03/04/2024 17:00", statut: "Terminé" },
  { id: "EMP-2024-0135", emprunteur: "Léa Mercier", role: "Étudiante", ordinateur: "PC-022", numeroSerie: "SN-DELL-2024-0022", dateEmprunt: "25/03/2024 14:30", datePrevue: "01/04/2024 17:00", statut: "En retard" },
  { id: "EMP-2024-0134", emprunteur: "Arthur Blanc", role: "Étudiant", ordinateur: "PC-023", numeroSerie: "SN-HP-2024-0023", dateEmprunt: "21/05/2024 10:15", datePrevue: "28/05/2024 18:00", statut: "En cours" },
  { id: "EMP-2024-0133", emprunteur: "Inès Guerin", role: "Enseignante", ordinateur: "PC-024", numeroSerie: "SN-ASUS-2024-0024", dateEmprunt: "20/05/2024 13:00", datePrevue: "27/05/2024 18:00", statut: "En cours" },
  { id: "EMP-2024-0132", emprunteur: "Nathan Muller", role: "Étudiant", ordinateur: "PC-025", numeroSerie: "SN-LEN-2024-0025", dateEmprunt: "15/03/2024 09:00", datePrevue: "22/03/2024 17:00", statut: "Terminé" },
  { id: "EMP-2024-0131", emprunteur: "Zoé Lambert", role: "Personnel", ordinateur: "PC-026", numeroSerie: "SN-DELL-2024-0026", dateEmprunt: "13/03/2024 10:45", datePrevue: "20/03/2024 17:00", statut: "Terminé" },
  { id: "EMP-2024-0130", emprunteur: "Ethan Bonnet", role: "Étudiant", ordinateur: "PC-027", numeroSerie: "SN-HP-2024-0027", dateEmprunt: "11/03/2024 08:15", datePrevue: "18/03/2024 17:00", statut: "Terminé" },
  { id: "EMP-2024-0129", emprunteur: "Jade Francois", role: "Étudiante", ordinateur: "PC-028", numeroSerie: "SN-ASUS-2024-0028", dateEmprunt: "09/03/2024 15:30", datePrevue: "16/03/2024 17:00", statut: "Terminé" },
  { id: "EMP-2024-0128", emprunteur: "Louis Martinez", role: "Enseignant", ordinateur: "PC-029", numeroSerie: "SN-LEN-2024-0029", dateEmprunt: "07/03/2024 11:00", datePrevue: "14/03/2024 17:00", statut: "Terminé" },
  { id: "EMP-2024-0127", emprunteur: "Anna Legrand", role: "Étudiante", ordinateur: "PC-030", numeroSerie: "SN-DELL-2024-0030", dateEmprunt: "05/03/2024 09:30", datePrevue: "12/03/2024 17:00", statut: "Terminé" },
  { id: "EMP-2024-0126", emprunteur: "Tom Garnier", role: "Personnel", ordinateur: "PC-031", numeroSerie: "SN-HP-2024-0031", dateEmprunt: "03/03/2024 14:00", datePrevue: "10/03/2024 17:00", statut: "Terminé" },
  { id: "EMP-2024-0125", emprunteur: "Lina Chevalier", role: "Étudiante", ordinateur: "PC-032", numeroSerie: "SN-ASUS-2024-0032", dateEmprunt: "01/03/2024 10:15", datePrevue: "08/03/2024 17:00", statut: "Terminé" },
];

export default function AllLoan() {
  // États des filtres
  const [search, setSearch] = useState("");
  const [statut, setStatut] = useState("Tous");
  const [dateDebut, setDateDebut] = useState("");
  const [dateRetourPrevue, setDateRetourPrevue] = useState("");
  // État de la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  // Filtrage selon recherche, statut et dates
  const empruntsFiltres = useMemo(() => {
    return tousLesEmprunts.filter((emprunt) => {
      const matchSearch =
        search.trim() === "" ||
        emprunt.emprunteur.toLowerCase().includes(search.toLowerCase()) ||
        emprunt.ordinateur.toLowerCase().includes(search.toLowerCase()) ||
        emprunt.id.toLowerCase().includes(search.toLowerCase());
      const matchStatut = statut === "Tous" || emprunt.statut === statut;
      return matchSearch && matchStatut;
    });
  }, [search, statut]);

  // Pagination sur les résultats filtrés
  const totalPages = Math.max(1, Math.ceil(empruntsFiltres.length / pageSize));
  const page = Math.min(currentPage, totalPages);
  const empruntsPage = empruntsFiltres.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  // Statistiques calculées sur l'ensemble des emprunts
  const stats = useMemo(() => {
    return {
      enCours: tousLesEmprunts.filter((e) => e.statut === "En cours").length,
      termines: tousLesEmprunts.filter((e) => e.statut === "Terminé").length,
      enRetard: tousLesEmprunts.filter((e) => e.statut === "En retard").length,
      emprunteurs: new Set(tousLesEmprunts.map((e) => e.emprunteur)).size,
    };
  }, []);

  return (
    <>
      <HeaderEmprunts
        onNouvelEmpruntClick={() => console.log("Nouvel emprunt")}
      />

      <FiltresEmprunts
        search={search}
        onSearchChange={(value) => {
          setSearch(value);
          setCurrentPage(1); // reset à la page 1 quand on filtre
        }}
        statut={statut}
        onStatutChange={(value) => {
          setStatut(value);
          setCurrentPage(1);
        }}
        dateDebut={dateDebut}
        onDateDebutChange={(value) => {
          setDateDebut(value);
          setCurrentPage(1);
        }}
        dateRetourPrevue={dateRetourPrevue}
        onDateRetourPrevueChange={(value) => {
          setDateRetourPrevue(value);
          setCurrentPage(1);
        }}
        onFiltresClick={() => console.log("Ouvrir filtres avancés")}
      />

      <TableEmpruntsListe
        emprunts={empruntsPage}
        onVoirClick={(id) => console.log("Voir", id)}
        onRetourClick={(id) => console.log("Marquer comme retourné", id)}
        onModifierClick={(id) => console.log("Modifier", id)}
        onSupprimerClick={(id) => console.log("Supprimer", id)}
      />

      <PaginationEmprunts
        currentPage={page}
        totalPages={totalPages}
        totalItems={empruntsFiltres.length}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
      />

      <StatsEmprunts
        enCours={stats.enCours}
        termines={stats.termines}
        enRetard={stats.enRetard}
        emprunteurs={stats.emprunteurs}
      />
    </>
  );
}
