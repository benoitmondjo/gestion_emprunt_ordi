"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Ajout du hook de navigation
import TableSalle from "@/components/classroom/TableSalle";
import SearchBarSalle from "@/components/classroom/SearchBarSalle";
import PaginationSalle from "@/components/classroom/PaginationSalle";
import SubHeader from "@/components/Layouts/SubHeader";

import { salles } from "@/lib/mock/classroom-data";

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
        link={{label: "Ajputer une salle", url:"/classroom/create"}}
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
