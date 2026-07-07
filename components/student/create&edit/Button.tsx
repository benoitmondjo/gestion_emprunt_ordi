
interface ButtonProps{
    text: string;
}
export default function Button({text}:ButtonProps){

    return(

        <div className="flex justify-end gap-4 mt-10">

            {/*Bouton Annuler*/}

            <button className="border px-6  py-2 rounded-md">
                Annuler
            </button>

            {/*Bouton Confirmer*/}

             <button className="bg-teal-500 text-white px-6 py-3 rounded-md">
                {text}
            </button>

        </div>

    )
}