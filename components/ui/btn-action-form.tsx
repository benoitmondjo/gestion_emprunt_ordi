import SubmitBtn from "@/components/ui/submit-btn-element";
import ResettBtn from "@/components/ui/reset-btn-element";


/**
 * Barre d'actions en bas du formulaire : bouton "Annuler" + bouton de confirmation.
 * Le texte du bouton est paramétrable via labelConfirm, ce qui permet de
 * réutiliser ce composant pour "Créer la salle" ET "Enregistrer les modifications".
 */
export default function BtnFormAction() {
    return(<>
        <div className="flex justify-end">
            <div className="w-fit flex gap-2">
                <SubmitBtn label="Modifier" className="bg-primary text-sm text-white px-4" />
                <ResettBtn label="Annuler" className="border border-gray-400 px-4" />
            </div>
        </div>
    </>)
}