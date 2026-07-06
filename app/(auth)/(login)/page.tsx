
import LeftPart from "@/components/auth/LeftPart"
import RigthPart from "@/components/auth/RigthPart"


/**
 * Page de connexion
 * @returns 
 */
export default function Login() {
  
    return (
    <main className="min-h-screen flex">

        { /*Partie de gauche*/}

             <LeftPart/>

        {/*Partie de droite*/}
          
             <RigthPart/>
            


    </main>
    )
}
