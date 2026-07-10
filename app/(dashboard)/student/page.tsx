"use client";

import { useState } from "react";

import SubHeader from "@/components/Layouts/SubHeader";

import SearchBarStudent from "@/components/student/SearchBarStudent";//On importe le composant SearchBar
import TableStudent from "@/components/student/TableStudent";//On importe le composant TableApprenant
import PaginationStudent from "@/components/student/PaginationStudent";//On importe le composant Pagination

import {apprenants} from "@/lib/mock/student-data"



// On définit le nombre d'items présent dans le tableau
const ITEMS_PER_PAGE = 3;
   
/**
 * Page qui affiche tous les apprenants
 * @returns 
*/
export default function AllStudents() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    
    const filteredApprenants = apprenants.filter((a) =>
        a.nomComplet.toLowerCase().includes(search.toLowerCase()) ||
        a.matricule.toLowerCase().includes(search.toLowerCase()) ||
        a.email.toLowerCase().includes(search.toLowerCase())
    );
    
    // On découpe la liste filtrée pour n'afficher que la page courante
    const paginatedApprenants = filteredApprenants.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );
    return (
        <section>   
           
           <SubHeader 
                title="Liste des apprenants" 
                subtitle="Tous les apprenants de la fabrique"   
                link={{label: "nouveau apprenant", url: '/student/create'}}
            />

            <div className="bg-white rounded-xl shadow p-4">
                {/* Barre de recherche et filtres */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <SearchBarStudent
                        value={search}
                        onChange={(v) => { setSearch(v); setCurrentPage(1); }} // on revient à la page 1 à chaque recherche
                        placeholder="Rechercher un apprenant..."
                        />

                    {/* Les options de filtrage */}
                    <select className="border border-gray-100 rounded-lg px-3 py-2 text-sm font-inter">
                        <option>Toutes les salles</option>
                        <option>Developpeurs</option>
                        <option>Digital creator</option>
                    </select>

                    <select className="border border-gray-100 rounded-lg px-3 py-2 text-sm font-inter">
                        <option>Statut</option>
                        <option>Actif</option>
                        <option>Inactif</option>
                    </select>

                </div>

                {/* Tableau d'apprenants */}
                <TableStudent apprenants={paginatedApprenants} />

                {/* Pagination */}
                <PaginationStudent
                    currentPage={currentPage}
                    totalItems={filteredApprenants.length}
                    itemsPerPage={ITEMS_PER_PAGE}
                    onPageChange={setCurrentPage}
                    itemLabel="apprenants"
                />
            </div>
        </section>
    );
}
