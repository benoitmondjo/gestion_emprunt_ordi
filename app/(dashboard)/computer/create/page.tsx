/**
 * Page pour la creation d'un ordinateur
 * @returns 
 */
export default function CreateComputer() {

    return (<>

    <div className="flex gap-4">
                {/*Debut de la deuxieme div */}
                <div className="border border-gray-300 rounded-md p-6"> 
                    <div className="flex gap-2 text-blue-500 text-font-bold mb-1">
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

                    <section>
                                <h4 className="text-2xl font-bold mt-4">Informations générales</h4>
                           
                                <div className="flex gap-6 mt-4"> 
                                        <div className="mb-2">
                                        <p className="font-bold">Nom de l'ordinateur</p>
                                        <input
                                        type="text"
                                        placeholder="Ex:PC-009"
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-80"/>
                                        </div>
                                        
                                            <div>
                                        <p className="font-bold">Catégoies</p>
                                        <input
                                        type="text"
                                        placeholder="Sélectionnez une catégorie"
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-80"/>
                                            </div>
                                </div>
                           


                                <div className="flex gap-6 mt-4"> 
                                        <div className="mb-2">
                                        <p className="font-bold">Numéro de série</p>
                                        <input
                                        type="text"
                                        placeholder="Ex: SN-LN-2024-009"
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-80"/>
                                        </div>
                                        
                                            <div>
                                        <p className="font-bold">Marques/Modeles</p>
                                        <input
                                        type="text"
                                        placeholder="Ex: Dell Latitude 5420"
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-80 "/>
                                            </div>
                                </div>

                                   
                                <div className="flex gap-6 mt-4"> 
                                        <div className="mb-2">
                                        <p className="font-bold">Status</p>
                                        <input
                                        type="text"
                                        placeholder="Sélectionez un statut"
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-80"/>
                                        </div>




                                            <div>
                                        <p className="font-bold">Localisation </p>
                                        <input
                                        type="text"
                                        placeholder="Sélectionnez une localisation"
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-80"/>
                                            </div>
                                </div>
                    </section>

                    <section>
                                <h4 className="text-2xl font-bold mt-4">Catéristiques techniques</h4>
                                    
                                <div className="flex gap-6 mt-4"> 
                                        <div className="mb-2">
                                        <p className="font-bold">Système d'exploitation</p>
                                        <input
                                        type="text"
                                        placeholder="Ex: Windows 11 pro"
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-80"/>
                                        </div>
                                    
                                            <div>
                                        <p className="font-bold">Mémoire (RAM)</p>
                                        <input
                                        type="text"
                                        placeholder="EX: 16 GO"
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-80"/>
                                            </div>
                                </div>

                                   
                                <div className="flex gap-6 mt-4"> 
                                        <div className="mb-2">
                                        <p className="font-bold">Stockage</p>
                                        <input
                                        type="text"
                                        placeholder="Ex: 500 GO"
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-80"/>
                                        </div>
                                    
                                            <div>
                                        <p className="font-bold">Processeur </p>
                                        <input
                                        type="text"
                                        placeholder="Ex: Intel Core i5"
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-80"/>
                                            </div>
                                </div>

                                   
                                <div className="flex gap-6"> 
                                        <div className="mb-2">
                                        <p className="font-bold">Autres informations</p>
                                        <input
                                        type="text"
                                        placeholder="Ex: Carte graphiques, taille d'écrans etc."
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-166 h-12"/>
                                        </div>
                                    
                                </div>
                    </section>       
                            
                        

                </div>
            {/* fin de la deuxieme div */}


                <div className="bg-blue-500  text-black p-2 w-100 h-90 rounded">

                    <h5><strong className="font-bold">Image</strong> (optionnel)</h5>

                    <div className="bg-gray-200 text-black w-80 h-70 rounded-md ml-8 mt-5 flex flex-col items-center justify-center min-h-[200px] bg-gray-100">
                    <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918ZM20 15V5H4V19L14 9L20 15ZM20 17.8284L14 11.8284L6.82843 19H20V17.8284ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>

                   <p>Glissez une image ici <br></br> ou cliquez pour parcourir</p> 
                   <p className="mt-12">Format accepté: JPG, PNG (max. 2 mo)</p>
                    </div>
                </div>
     </div>           
    </>)
}
