import React from 'react';

const InformationsGenerales = () => {
  return (
    <div className="space-y-6">
      {/* Titre de section */}
      <h3 className="text-lg font-semibold text-gray-900">Informations générales</h3>
      
      {/* Grille responsive : 1 colonne sur mobile, 2 colonnes sur desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* ===== COLONNE GAUCHE ===== */}
        <div className="space-y-4">
          
          {/* Champ Nom de la salle */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom de la salle
            </label>
            <input 
              type="text" 
              defaultValue="Salle 103" 
              placeholder="Ex: Salle 103"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
            />
          </div>

          {/* Champ Responsable (2 sélecteurs côte à côte) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Responsable
            </label>
            <div className="flex gap-2">
               <select className="flex-1 px-3 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500">
                 <option>Sélectionner...</option>
                 <option>Pierre Dubois</option>
                 <option>Isabelle Moreau</option>
               </select>
               <select className="flex-1 px-3 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500">
                 <option>Sélectionner...</option>
                 <option>Pierre Dubois</option>
                 <option>Isabelle Moreau</option>
               </select>
            </div>
          </div>
        </div>

        {/* ===== COLONNE DROITE ===== */}
        <div className="space-y-4">
          
          {/* Champ Formation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Formation
            </label>
            <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Sélectionner une formation</option>
              <option>Formation A</option>
              <option>Formation B</option>
              <option>Formation C</option>
            </select>
          </div>

          {/* Champ Chef de classe */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Chef de classe
            </label>
            <select className="w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Sélectionner un chef de classe</option>
              <option>Michel Faure</option>
              <option>Marie Dubois</option>
              <option>Marie Curie</option>
              <option>Isabelle Noreau</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationsGenerales;