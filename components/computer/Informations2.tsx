


export default function(){

    return(
          <div className="flex gap-6 mt-4"> 
                                        
                                    <div className="w-80">
                                        <div className="relative w-80 max-w-xs">
                                                <p className="font-bold">Status</p>
                                            <select className="w-full p-2.5 pr-10 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer outline-none focus:ring-2">
                                                <option>Assigné</option>
                                                <option>Disponible</option>
                                                <option>Indisponible</option>
                                                <option> en Retard de.... </option>
                                            </select>
                                            
                                            {/* Petite flèche SVG positionnée à droite */}
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            </div>

                                </div>
                                    <div className="relative w-80 max-w-xs">
                                                <p className="font-bold">Localisations</p>
                                            <select className="w-full p-2.5 pr-10 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer outline-none focus:ring-1">
                                                <option>bureau 301,Paris-Jean Junior</option>
                                                <option>PC-009- Jean Junior</option>
                                                <option>PC-015- Astus</option>
                                                <option>PC-001- Wen Joanel</option>
                                                <option>PC-225- Willy</option>
                                                <option>PC-125- Vanélie</option>
                                                <option>PC-145- Glenn Benoît</option>
                                                
                                            </select>
                                            
                                            {/* Petite flèche SVG positionnée à droite */}
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            </div>
                             </div>
    )
}
