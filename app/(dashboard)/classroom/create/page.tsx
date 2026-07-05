'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import InformationsGenerales from '@/components/salle/InformationsGenerales';
import EquipementsCapacite from '@/components/salle/EquipementsCapacite';

export default function CreateSallePage() {
  const router = useRouter();

  const handleCancel = () => {
    router.back();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis - Création de la salle...');
    alert('Salle créée avec succès !');
    router.push('/salle');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* ===== EN-TÊTE DE LA PAGE ===== */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Ajouter une nouvelle salle</h1>
          <nav className="mt-2 flex items-center text-sm">
            <a href="/salle" className="text-teal-600 font-medium hover:text-teal-700 transition-colors">
              Salles
            </a>
            <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900 font-medium">Ajouter une nouvelle salle</span>
          </nav>
        </div>

        {/* ===== CARTE PRINCIPALE DU FORMULAIRE ===== */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Section 1 : Informations générales */}
              <InformationsGenerales />

              {/* Section 2 : Équipements et capacité */}
              <EquipementsCapacite />

              {/* ===== BOUTONS D'ACTION ===== */}
              <div className="flex items-center justify-end pt-6 mt-8 border-t border-gray-100">
                
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors mr-3"
                >
                  Annuler
                </button>
                
                <button
                  type="submit"
                  className="px-5 py-2.5 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
                >
                  Créer la salle
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
