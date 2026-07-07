import React from 'react';

export default function Header(){


    return(
    <div>
         <div className="flex gap-2 text-blue-500 text-font-bold mb-1 ">
                            <svg  className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 
                            19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
                            <p>Retour</p>
                    </div>

                           <div className=" flex gap-2 ml-9">
                            <div className="w-15 bg-blue-300 rounded-sm text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 5V16H20V5H4ZM2 4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V18H2V4.00748ZM1 19H23V21H1V19Z"></path></svg>
                            </div>

                            <div className="ml-3">
                            <h1 className="text-4xl font-bold mb-2">Ajouter un ordinateur</h1>
                            <p className="text-gray-500">Enregistrer un nouvel ordinateur dans le parc informatique </p>
                           </div>
                    </div>
                 </div>


 )
  }