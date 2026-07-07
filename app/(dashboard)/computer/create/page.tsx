import { FormSelect } from "@/components/computer/FormSelect";
import { Label, Select } from "flowbite-react";
import Header from "@/components/computer/Header";
import Infos from "@/components/computer/Infos";
import Inform from "@/components/computer/Inform";
import Informations from "@/components/computer/Informations";
import CAracteristik1 from "@/components/computer/Caracteristik1";
import Caracteristik2 from "@/components/computer/Caracteristik2";
import Foot1 from '@/components/computer/Foot1';
import Foot2 from '@/components/computer/Foot2';


/**
 * Page pour la creation d'un ordinateur
 * @returns 
 */
export default function CreateComputer() {

    return (<>

    <div className="flex gap-4">
                {/*Debut de la deuxieme div */}
                <div className="border border-gray-300 rounded-md p-6 bg-gray-100 "> 
                
                {/* debut liste des composants */}

                                <Header />
    
                    <section>
                                <Infos/>


                                <Inform/>
                            
                                <Informations/>
                    </section>
                    

                    <section>
                                <CAracteristik1/>

                                <Caracteristik2/>
            

                    </section>       
                        
                        

                </div>
            {/* fin de la deuxieme div */}
                                <Foot1/>


    </div>  
                                <Foot2/>
        
                        {/* fin composants 2 */}
    </>)
}
