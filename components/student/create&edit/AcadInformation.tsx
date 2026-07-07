
import Input from "./Input"

export default function AcadInformation(){

    return(

        <section>

             <h2 className="text-2xl font-semibold mb-6">
                Informations académiques
            </h2>

             <div className="flex flex-col gap-2">
                   
                    <Input 
                    label="Matricule"
                    type="text"
                    placeholder="Matricule"
                     />

                </div>


                <div>
                    <label>Groupe</label>

                    <select className="w-full border border-gray-300 rounded-md px-6
                outeline-none focus:border-teal-500">
                        <option >GLSI 1</option>
                        <option >GLSI 2</option>
                        <option >GI 1</option>
                        <option >GI 2</option>
                    </select>

                </div>

        </section>

    )
}