import React from 'react';

const EquipementsCapacite = () => {
  return (
    <div className="space-y-6">
      {/* Titre de section */}
      <h3 className="text-lg font-semibold text-gray-900">Équipements et capacité</h3>
      
      {/* Grille responsive : 1 colonne sur mobile, 2 colonnes sur desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Champ Capacité */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Capacité
          </label>
          <input 
            type="number" 
            min="1"
            defaultValue="20" 
            placeholder="Ex: 20"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
          />
        </div>

        {/* Champ Ordinateurs */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ordinateurs
          </label>
          <input 
            type="number" 
            min="0"
            defaultValue="20" 
            placeholder="Ex: 20"
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
          />
        </div>
      </div>

      {/* 
        NOTE : Les équipements additionnels (Projecteur, Tableau blanc, etc.) 
        ont été supprimés conformément à la demande.
      */}
    </div>
  );
};

export default EquipementsCapacite;