

export default function Inform(){

    return(

                                <div className="flex gap-6 mt-4"> 
                                        <div className="mb-2">
                                        <p className="font-bold">Numéro de série</p>
                                        <input
                                        type="text"
                                        placeholder="Ex: SN-LN-2024-009"
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-80 h-11"/>
                                        </div>
                                        
                                            <div>
                                        <p className="font-bold">Marques/Modeles</p>
                                        <input
                                        type="text"
                                        placeholder="Ex: Dell Latitude 5420"
                                        className="border border-gray-300 rounded-md p-1 bg-white text-black focus:outline-none focus:ring-1 w-80 h-11"/>
                                            </div>
                                </div>
    )
}