


export default function(){
    return(
        
        <div>
                        <div>
                                <div className="flex gap-6 mt-4"> 
                                        <div className="mb-2">
                                        <p className="font-bold">Stockage</p>
                                        <input
                                        type="text"
                                        placeholder="1 To NVMeSSD"
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-80 h-11"/>
                                        </div>
                                    
                                            <div>
                                        <p className="font-bold">Processeur </p>
                                        <input
                                        type="text"
                                        placeholder="Intel Core i9-10885H"
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-80 h-11"/>
                                            </div>
                                </div>

                                
                                <div className="flex gap-6"> 
                                        <div className="mb-2">
                                        <p className="font-bold">Autres informations</p>
                                        <input
                                        type="text"
                                        placeholder=" RTX 5000, 15.6' Docker IDEs installed"
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-166 h-12"/>
                                        </div>
                                    </div>
                        </div>
{/*la div main*/}  </div>
    )
}