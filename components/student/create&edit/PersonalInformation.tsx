
import Input from "./Input"
export default function PersonalInformation (){

    return(

        <section>

             <h2 className="text-2xl font-semibold mb-6">
                Informations personnelles
            </h2>

         <div className="grid grid-cols-2 gap-6">
            

                <div>
                    
                    <Input 
                    label="Nom"
                    type="text"
                    placeholder="Nom du nouvel apprenant" 
                    />

                </div>

                <div>
        
                    <Input 
                    label="Prénom"
                    type="Prénom"
                    placeholder="Prénom du nouvel apprenant" 
                    />

                </div>

                <div>
                    
                    <Input 
                    label="Date de naissance"
                    type="Date"
                    placeholder="Saisir votre date de naissance"
                     />

                </div>

                <div>
                    <label>Genre</label>

                    <select className="w-full border border-gray-300 rounded-md px-6
                outeline-none focus:border-teal-500">
                        <option >Masculin</option>
                        <option >Feminin</option>
                        <option >Autres</option>
                    </select>

                </div>

                 <div>
                    
                    <Input 
                    label="Numéro de téléphone"
                    type="text"
                    placeholder="Numéro de téléphone"
                     />

                </div>

                <div>
                    
                    <Input 
                    label="Email"
                    type="Email"
                    placeholder="Entrer votre Email"
                     />

                </div>

            </div>

        </section>

    )
}