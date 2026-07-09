
import LeftPart from "@/components/auth/LeftPart"
import RigthPart from "@/components/auth/RigthPart"


/**
 * Page de connexion
 * @returns 
 */
export default function Login() {
  
    return (
    <main className="min-h-screen flex items-center main-container">

        { /*Partie de gauche*/}

            <LeftPart className={"hidden h-screen md:flex md:w-1/2 w-full"} />

        {/*Partie de droite*/}
          
             <RigthPart className={""} />
            


    </main>
    )
}
