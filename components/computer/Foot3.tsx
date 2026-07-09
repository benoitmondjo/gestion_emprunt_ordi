import Image from 'next/image';
import Images from '@/public/images.jpeg';


export default function(){
    return(
         <div className="">
                <div className="bg-gray-100  text-black p-2 w-100 h-90 rounded-md border border-gray-300  ">

                    <h5><strong className="font-bold">Image</strong> (optionnel)</h5>

                    <div className="bg-gray-200 text-black w-80 h-70 rounded-md ml-8 mt-5 flex flex-col items-center justify-center min-h-[200px] bg-gray-100  border-1 border-dashed border-gray-400">
    {/* la div de l'image */}
                   <div className="flex justify-center items-center h-screen">
                    <div className="relative w-64 h-42 rounded-md overflow-hidden shadow-lg">
                        <Image
                        src={Images}
                        alt="Description de la photo"
                        className="object-cover" // Classe Tailwind pour remplir le conteneur
                        placeholder="blur" // Flou de chargement automatique pour les images locales
                        />
                    </div>
 {/* la div de l'image */} </div>
                    <p className=""> Image actuelle(cliquez pour changer) </p>
                    </div>
                </div>

                <div>
                    <div className="mt-5 bg-blue-100 rounded-md h-40 w-100 mr-12 border border-gray-300">
                        <p className="ml-8 p-4 text-blue-500 flex gap-2">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path></svg>
                            Information</p>

                        <p className="ml-6">Les champs marqués par un * sont obligatoires.<br></br> vous pourrez modifier ces informations ulterieurement.</p>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-md border border-gray-300 mt-2 w-60 h-8 flex  flex-col items-center justify-center ml-40">Historique de smodifications</div>
        </div>
        
    )
}