

export default function(){

    return(
         <div>
                        <h4 className="text-2xl font-bold mt-4">Catéristiques techniques</h4>
                                    
                                <div className="flex gap-6 mt-4"> 

                                        <div className="relative w-80 max-w-xs">
                                                <p className="font-bold">Systèmes d'exploitation</p>
                                            <select className="w-full p-2.5 pr-10 bg-white border border-gray-300 rounded-lg appearance-none cursor-pointer outline-none focus:ring-1">
                                                <option>Ubuntu 22.04 LTS</option>
                                                <option>Windows 11 Pro</option>
                                                <option>Linux Mint 2.0</option>
                                                <option>Mac os</option>
                                            </select>
                                            
                                            {/* Petite flèche SVG positionnée à droite */}
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            </div>

                                            <div className="mb-2">
                                            <p className="font-bold">Mémoire (RAM)</p>
                                            <input
                                            type="text"
                                            placeholder="32 GO"
                                            className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-80 h-11"/>
                                            </div>
                                </div>
                        </div>
    )
}