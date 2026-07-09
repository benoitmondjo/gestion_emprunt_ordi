import Image from 'next/image';
import Images from '@/public/images.jpeg';

import Header2 from '@/components/computer/Header2';
import Infos2 from '@/components/computer/Infos2';
import Inform2 from '@/components/computer/Inform2';
import Informations2 from '@/components/computer/Informations2';
import Caracteristik3 from '@/components/computer/Caracteristik3';
import Caracteristik4 from '@/components/computer/Caracteristik4';
import Foot3 from '@/components/computer/Foot3';
import Foot4 from '@/components/computer/Foot4';
/**
 * Page pour modifier un ordinateur
 * 
 */
export default function EditComputer() {

    return(<>

                        
                         {/* le header */}
                        <Header2 />
                        {/* le header */}

      {/* la div1 */} <div className="  flex gap-6 mt-1"> 

                 {/* la div main*/}<div className="border border-gray-300 rounded-md p-4">                     
                                    
                                    <Infos2 />

                                    <Inform2 />

                                    <Informations2 />

                 {/*partie des carateristique */}
                                    <Caracteristik3 />
                                    <Caracteristik4 />
                      
{/*la div main*/}  </div> 
{/* le main 2*/}
                                    <Foot3 />
{/* le main 2*/}
      

  {/*la div1*/} </div>
                                    <Foot4 />

                </>
                )
            }