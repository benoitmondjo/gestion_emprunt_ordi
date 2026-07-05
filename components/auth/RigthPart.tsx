
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Input from "./Input";
export default function RigthPart() {
  return (
    

      <div className="w-1/2 flex justify-center items-center">

        <div className="max-w-[500px]">

          <h2 className="text-5xl font-bold text-primary text-center mb-10">
            Veuillez vous connecter
          </h2>

          <div className="border rounded-xl flex items-center p-4 mb-5">
            <FaEnvelope className="text-primary mr-4" />
                <Input 
                    type="email"
                    placeholder="Entrez votre adresse mail"
                />
           
          </div>

          <div className="border rounded-xl flex items-center p-4 mb-5">
            <FaLock className="text-primary mr-4" />

            <Input 
                    type="password"
                    placeholder="Entrez votre mot de passe"
                />
                
          </div>

          <button className="w-full bg-primary text-white py-4 rounded-xl">
            Connexion
          </button>

        </div>

      </div>

  );
}