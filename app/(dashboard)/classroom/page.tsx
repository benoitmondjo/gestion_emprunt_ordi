"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Ajout du hook de navigation
import TableSalle from "@/components/classroom/TableSalle";
import SearchBarSalle from "@/components/classroom/SearchBarSalle";
import PaginationSalle from "@/components/classroom/PaginationSalle";
import SubHeader from "@/components/Layouts/SubHeader";

// Données des salles (sera remplacé par un appel API plus tard)
const salles = [
  {
    id: 1,
    nom: "Salle 101",
    formation: "Formation A",
    responsable: "Pierre Dubois",
    chefDeClasse: "Marie Curie",
    capacite: 20,
    effectif: 30,
    ordinateurs: 18,
  },
  {
    id: 2,
    nom: "Salle 102",
    formation: "Formation A",
    responsable: "Pierre Dubois",
    chefDeClasse: "Louis Pasteur",
    capacite: 25,
    effectif: 35,
    ordinateurs: 24,
  },
  {
    id: 3,
    nom: "Salle 201",
    formation: "Formation A",
    responsable: "Isabelle Moreau",
    chefDeClasse: "Jean Moulin",
    capacite: 30,
    effectif: 45,
    ordinateurs: 28,
  },
  {
    id: 4,
    nom: "Salle 202",
    formation: "Formation B",
    responsable: "Michelle Faure",
    chefDeClasse: "Sophie Germain",
    capacite: 20,
    effectif: 45,
    ordinateurs: 19,
  },
  {
    id: 5,
    nom: "Salle 301",
    formation: "Formation B",
    responsable: "Michelle Faure",
    chefDeClasse: "Victor Hugo",
    capacite: 40,
    effectif: 45,
    ordinateurs: 38,
  },
];

// Le nombre d'items par page
const ITEMS_PER_PAGE = 3;

/**
 * Page qui affiche toutes les salles de classes
 */
export default function AllSalles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter(); // Hook de navigation

  // Filtrage selon la recherche (insensible à la casse)
  const filteredSalles = salles.filter((salle) =>
    salle.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Découpage en pages
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedSalles = filteredSalles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section>
   
      <SubHeader
        title="Salles"
        subtitle="Liste des salles disponibles"
        buttonLabel="Nouvelle salle"
        onButtonClick={() => router.push('/classroom/create')}
      />

      {/* Le conteneur principal */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* Barre de recherche */}
        <div className="p-4 border-b border-gray-100">
          <SearchBarSalle
            value={searchTerm}
            onChange={(value) => {
              setSearchTerm(value);
              setCurrentPage(1);
            }}
            placeholder="Rechercher une salle..."
          />
        </div>

        {/* Tableau des salles */}
        <TableSalle salles={paginatedSalles} />

        {/* Pagination */}
        <PaginationSalle
          currentPage={currentPage}
          totalItems={filteredSalles.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={setCurrentPage}
          itemLabel="salles"
        />
      </div>
    </section>
  );
}
