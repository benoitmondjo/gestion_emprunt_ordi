


export default function Foot1(){

return(

                <div className="bg-gray-100  text-black p-2 w-100 h-90 rounded-md border border-gray-300 ">

                    <h5><strong className="font-bold">Image</strong> (optionnel)</h5>

                    <div className="bg-gray-200 text-black w-80 h-70 rounded-md ml-8 mt-5 flex flex-col items-center justify-center min-h-[200px] bg-gray-100">
                    <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918ZM20 15V5H4V19L14 9L20 15ZM20 17.8284L14 11.8284L6.82843 19H20V17.8284ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>

                   <p>Glissez une image ici <br></br> <span className="text-blue-500">ou cliquez pour parcourir</span></p> 
                   <p className="mt-12">Format accepté: JPG, PNG (max. 2 Mo)</p>
                    </div>

                    <div className="mt-15 mr-7 bg-blue-100 rounded-md h-40 w-100 mr-12 border border-gray-300">
                        <p className="ml-8 p-4 text-blue-500 flex gap-2">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path></svg>
                            Information</p>

                        <p className="ml-6">Les champs marqués par un * sont obligatoires.<br></br> vous pourrez modifier ces informations ulterieurement.</p>
                    </div>
                </div>
)
}