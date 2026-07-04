//Ici on définit les types des interface Emprunt et AprenantDetail

export interface Emprunt {
    id: number;
    date: string;
    designation: string;
    statut: "Retourné" | "Actuellement emprunté";
}

export interface ApprenantDetail {
    id: number;
    nomComplet: string;
    prenom: string;
    nom: string;
    matricule: string;
    groupe: string;
    email: string;
    telephone: string;
    statut: "Actif" | "Inactif";
    dateNaissance: string;
    genre: "Homme" | "Femme";
    emprunts: Emprunt[];
}