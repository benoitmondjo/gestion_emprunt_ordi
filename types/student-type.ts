// Structure d'un apprenant
export interface Apprenant {
    id: number;
    nomComplet: string;
    nom:string,
    prenom?:string
    matricule: string;
    groupe: string;
    email: string;
    telephone: string;
    statut: "Actif" | "Inactif";
}


