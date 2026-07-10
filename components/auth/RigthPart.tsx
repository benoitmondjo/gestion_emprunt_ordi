"use client";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Input from "./Input";
import SubmitBtn from "@/components/ui/submit-btn-element";

export default function RigthPart({className}:{className?: string}) {

    const router = useRouter();

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        
        router.push("/dashboard");
    };

    return (
    
      <div className={`w-full md:w-1/2 flex justify-center items-center px-3`}>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                <h2 className="text-4xl font-bold text-primary text-center mb-10">
                    Veuillez vous connecter
                </h2>

                <Input 
                    type="email"
                    placeholder="Entrez votre mot de passe"
                    classe={`text-gray-600`}
                    icon={FaEnvelope}
                    iconClasse={`text-primary`}
                />
            
                <Input 
                    type="password"
                    placeholder="Entrez votre email"
                    classe={`text-gray-600`}
                    icon={FaLock}
                    iconClasse={`text-primary`}
                />

                <SubmitBtn label='connexion' className={`bg-primary text-white`} />

            </form>

      </div>
    );
}