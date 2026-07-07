

export default function Caracteristik2(){

return(

        <div>
                                <div className="flex gap-6 mt-4"> 
                                        <div className="mb-2">
                                        <p className="font-bold">Stockage</p>
                                        <input
                                        type="text"
                                        placeholder="Ex: 500 GO"
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-80 h-11"/>
                                        </div>
                                    
                                            <div>
                                        <p className="font-bold">Processeur </p>
                                        <input
                                        type="text"
                                        placeholder="Ex: Intel Core i5"
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-80 h-11"/>
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
                        </div>
)


}

        