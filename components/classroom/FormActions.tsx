/**
 * Props attendues par le composant FormActions.
 */
interface FormActionsProps {
  /** Texte du bouton de confirmation
   * (ex: "Créer la salle" ou "Enregistrer les modifications") */
  labelConfirm: string;
  /** Fonction appelée au clic sur "Annuler" */
  onCancel: () => void;
  /** Fonction appelée au clic sur le bouton de confirmation */
  onConfirm: () => void;
}

/**
 * Barre d'actions en bas du formulaire : bouton "Annuler" + bouton de confirmation.
 * Le texte du bouton est paramétrable via labelConfirm, ce qui permet de
 * réutiliser ce composant pour "Créer la salle" ET "Enregistrer les modifications".
 */
export default function FormActions({
  labelConfirm,
  onCancel,
  onConfirm,
}: FormActionsProps) {
  return (
    /* Aligné à droite avec espace entre les deux boutons */
    <div className="flex justify-end gap-3 pt-2">

      {/* Bouton secondaire : Annuler */}
      <button
        type="button"
        onClick={onCancel}
        className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
      >
        Annuler
      </button>

      {/* Bouton principal : confirmation (couleur primary = teal) */}
      <button
        type="button"
        onClick={onConfirm}
        className="px-5 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity"
      >
        {labelConfirm}
      </button>

    </div>
  );
}