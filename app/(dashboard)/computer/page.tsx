"use client";

import { useState, useMemo } from "react";
import HeaderOrdinateurs from "@/components/computer/HeaderOrdinateurs";
import FiltresOrdinateurs from "@/components/computer/FiltresOrdinateurs";
import TableOrdinateursListe from "@/components/computer/TableOrdinateursListe";
import PaginationOrdinateurs from "@/components/computer/PaginationOrdinateurs";

/**
 * Page qui affiche toutes les ordinateurs
 * @returns 
 */

export default function AllComputer() {
 
     // États des filtres
  const [search, setSearch] = useState("");
  const [categorie, setCategorie] = useState("Tous");
  const [statut, setStatut] = useState("Tous");
  // État de la pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  // Données mockées en attendant le branchement API/Prisma
  const tousLesOrdinateurs = [
    { nom: "PC-001", categorie: "Portable", numeroSerie: "SN-LEN-2024-0001", statut: "Disponible" as const, localisation: "Salle Info 1" },
    { nom: "PC-002", categorie: "Portable", numeroSerie: "SN-LEN-2024-0002", statut: "En prêt" as const },
    { nom: "PC-003", categorie: "Fixe", numeroSerie: "SN-HP-2024-0003", statut: "Disponible" as const, localisation: "Salle Info 2" },
    { nom: "PC-004", categorie: "Portable", numeroSerie: "SN-DELL-2024-0004", statut: "En maintenance" as const, localisation: "Atelier" },
    { nom: "PC-005", categorie: "Fixe", numeroSerie: "SN-HP-2024-0005", statut: "Disponible" as const, localisation: "Bureau 3" },
    { nom: "PC-006", categorie: "Portable", numeroSerie: "SN-LEN-2024-0006", statut: "En prêt" as const },
    { nom: "PC-007", categorie: "Portable", numeroSerie: "SN-ASUS-2024-0007", statut: "Disponible" as const, localisation: "Salle Info 1" },
    { nom: "PC-008", categorie: "Fixe", numeroSerie: "SN-HP-2024-0008", statut: "Hors service" as const, localisation: "Dépôt" },
  ];

  // Filtrage selon recherche, catégorie et statut
  const ordinateursFiltres = useMemo(() => {
    return tousLesOrdinateurs.filter((ordi) => {
      const matchSearch = ordi.nom.toLowerCase().includes(search.toLowerCase());
      const matchCategorie = categorie === "Tous" || ordi.categorie === categorie;
      const matchStatut = statut === "Tous" || ordi.statut === statut;
      return matchSearch && matchCategorie && matchStatut;
    });
  }, [search, categorie, statut]);

  // Pagination sur les résultats filtrés
  const totalPages = Math.ceil(ordinateursFiltres.length / pageSize);
  const ordinateursPage = ordinateursFiltres.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <>
      <HeaderOrdinateurs
        onAjouterClick={() => console.log("Ajouter un ordinateur")}
      />

      <FiltresOrdinateurs
        search={search}
        onSearchChange={(value) => {
          setSearch(value);
          setCurrentPage(1); // reset à la page 1 quand on filtre
        }}
        categorie={categorie}
        onCategorieChange={(value) => {
          setCategorie(value);
          setCurrentPage(1);
        }}
        statut={statut}
        onStatutChange={(value) => {
          setStatut(value);
          setCurrentPage(1);
        }}
        onFiltresClick={() => console.log("Ouvrir filtres avancés")}
      />

      <TableOrdinateursListe
        ordinateurs={ordinateursPage}
        onVoirClick={(nom) => console.log("Voir", nom)}
        onModifierClick={(nom) => console.log("Modifier", nom)}
        onSupprimerClick={(nom) => console.log("Supprimer", nom)}
      />

      <PaginationOrdinateurs
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={ordinateursFiltres.length}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
      />
   </>)
}

