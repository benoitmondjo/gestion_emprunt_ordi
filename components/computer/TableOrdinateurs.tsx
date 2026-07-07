"use client";

// On importe React pour le state d'affichage progressif
import { useState } from "react";

// On importe l'icône chevron pour le lien "Voir plus"
import { FiChevronDown } from "react-icons/fi";

// On importe next/link pour le bouton "Voir tous les ordinateurs"
import Link from "next/link";

// On importe la ligne réutilisable du tableau
import TableOrdinateurRow from "./TableOrdinateurRow";

// On définit le typage d'un ordinateur
interface Ordinateur {
  code: string;
  nom: string;
  statut: "Disponible" | "Emprunté";
  emprunteur?: string;
  dateEmprunt?: string;
}

// On définit le typage des props attendues
interface TableOrdinateursProps {
  ordinateurs: Ordinateur[];
  pageSize?: number; // Nombre d'ordinateurs affichés par palier, par défaut 5
}

// Composant : bloc Ordinateurs (N) avec tableau et pagination progressive
export default function TableOrdinateurs({
  ordinateurs,
  pageSize = 5,
}: TableOrdinateursProps) {
  // Nombre d'ordinateurs actuellement visibles
  const [visibleCount, setVisibleCount] = useState(pageSize);

  const visibles = ordinateurs.slice(0, visibleCount);
  const hasMore = visibleCount < ordinateurs.length;

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">

        {/* Header : constité du titre et du bouton Voir tous les ordinateurs */}
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-primary font-semibold font-roboto">
            Ordinateurs ({ordinateurs.length})
            </h2>
            <Link
            href="/computer"
            className="border border-gray-200 shadow-sm hover:bg-gray-50 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium font-inter"
            >
            Voir tous les ordinateurs
            </Link>
        </div>

        {/* Tableau */}
        <div className="overflow-x-auto">
            <table className="w-full min-w-160 table-fixed">
                <thead>
                    <tr className="border-b border-gray-200 text-left">
                        <th className="w-30 py-2 px-2 text-xs font-medium text-(--texte-gray-1) font-inter">
                        Code
                        </th>
                        <th className="w-40 py-2 px-2 text-xs font-medium text-(--texte-gray-1) font-inter">
                        Nom
                        </th>
                        <th className="w-30 py-2 px-2 text-xs font-medium text-(--texte-gray-1) font-inter">
                        Statut
                        </th>
                        <th className="w-60 py-2 px-2 text-xs font-medium text-(--texte-gray-1) font-inter">
                        Emprunt en cours
                        </th>
                    </tr>
                </thead>
                <tbody>
                {visibles.map((ordi) => (
                    <TableOrdinateurRow key={ordi.code} {...ordi} />
                ))}
                </tbody>
            </table>
        </div>
        {/* Lien "Voir plus d'ordinateurs" */}
        {hasMore && (
            <div className="text-center mt-4">
                <button
                    onClick={() => setVisibleCount((prev) => prev + pageSize)}
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-medium font-inter hover:underline cursor-pointer"
                >
                    Voir plus d&apos;ordinateurs
                    <FiChevronDown className="w-4 h-4" />
                </button>
            </div>
        )}
    </div>
  );
}