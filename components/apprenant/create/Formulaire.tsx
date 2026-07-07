
import PersonalInformation from "./PersonalInformation"
import AcadInformation from "./AcadInformation"
import Button from "./Button"

interface FormulaireProps{
    buttonText: string;
}

export default function Formulaire ({buttonText}:FormulaireProps){

    return(

        <div className="bg-white rounded-xl shadow-lg p-10 mt-8">

             {/*Informations personnelles*/}
            <PersonalInformation/>

            {/*Informations académiques*/}
            <AcadInformation/>

            {/*Boutons*/}
            <Button text={buttonText}/>






        </div>



    
    )
}