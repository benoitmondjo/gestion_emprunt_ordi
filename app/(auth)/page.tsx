
import LeftPart from "@/components/login/LeftPart"
import RigthPart from "@/components/login/RigthPart"


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
