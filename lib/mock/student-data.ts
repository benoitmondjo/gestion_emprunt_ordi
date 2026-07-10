import { Apprenant } from "@/types/student-type";

//On crée un tableau d'apprenant
export const apprenants: Apprenant[] = [
    { 
        id: 1, 
        nomComplet: "Mamadou Diallo", 
        matricule: "APP-2024-0001", 
        groupe: "Salle 101", 
        email: "mamadou.dialla@campus.sn", 
        telephone: "77 123 46 67", statut: "Actif" 
    },
    { 
        id: 2, nomComplet: "Awa Fall", 
        matricule: "APP-2024-0002", 
        groupe: "Salle 101", 
        email: "awa.fall@campus.sn", 
        telephone: "78 234 56 78", 
        statut: "Actif" 
    },
    { 
        id: 3, 
        nomComplet: "Ibrima Ba", 
        matricule: "APP-2024-0003", 
        groupe: "Salle 102", 
        email: "ibrahima.ba@campus.sn", 
        telephone: "78 345 67 89", 
        statut: "Actif" 
    },
    { 
        id: 4, 
        nomComplet: "Ndeye Diop", 
        matricule: "APP-2024-0004", 
        groupe: "Salle 103", 
        email: "ndeye.diop@campus.sn", 
        telephone: "77 456 78 80", 
        statut: "Actif" 
    },
    { 
        id: 5, 
        nomComplet: "Cheikh Sy", 
        matricule: "APP-2024-0005", 
        groupe: "Salle 201", 
        email: "cheikh.sy@campus.sn", 
        telephone: "78 567 89 01", 
        statut: "Inactif" 
    },
    { 
        id: 6, 
        nomComplet: "Astou Kane", 
        matricule: "APP-2024-0006", 
        groupe: "Salle 202", 
        email: "astou.kane@campus.sn", 
        telephone: "78 676 90 12", 
        statut: "Actif" 
    },
    { 
        id: 7, 
        nomComplet: "Ousmane Mbaye", 
        matricule: "APP-2024-0007", 
        groupe: "Salle 203", 
        email: "ousmane.mbaye@campus.sn", 
        telephone: "77 788 01 23", 
        statut: "Actif" 
    },
];