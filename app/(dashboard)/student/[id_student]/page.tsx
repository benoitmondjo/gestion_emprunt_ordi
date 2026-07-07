//On importe link et notfound de next
import Link from "next/link";
import { notFound } from "next/navigation";

//On importe le style de la page
import "@/style/globals.css";
import "tailwindcss";

//On importe les composants
import StudentInfo from "@/components/student/StudentInfo";
import AcademicInfo from "@/components/student/AcademicInfo";
import EmpruntHistory from "@/components/student/EmpruntHistory";
import { ApprenantDetail } from "@/components/student/Type";

// Le tableau des  données 
const apprenants: ApprenantDetail[] = [
    {
        id: 1,
        nomComplet: "Mamadou Diop",
        prenom: "Mamadou",
        nom: "Diop",
        matricule: "APP-2024-0014",
        groupe: "GLSI 1",
        email: "m.diop@campus.sn",
        telephone: "77 123 45 67",
        statut: "Actif",
        dateNaissance: "12/05/2003",
        genre: "Homme",
        emprunts: [
            { 
                id: 1, 
                date: "01/10/2023", 
                designation: "Ordinateur Dell XPS", 
                statut: "Retourné" 
            },
            { 
                id: 2, 
                date: "15/09/2023", 
                designation: "Câble HDMI", 
                statut: "Retourné" 
            },
            { 
                id: 3, 
                date: "20/08/2023", 
                designation: "Ordinateur Lenovo ThinkPad", 
                statut: "Actuellement emprunté" 
            },
        ],
    },
];

interface PageProps {
    params: Promise<{ id_student: string }>;
}

/**
 * Page qui affiche un apprenant en particulier
 * @params
 */
export default async function ShowStudent({ params }: PageProps) {
    const { id_student } = await params;
    const apprenant = apprenants.find((a) => a.id === Number(id_student));

    if (!apprenant) {
        notFound();
    }

    return (
        <section className="p-4 sm:p-6">
            <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-roboto">Détails de l&apos;apprenant</h1>
                <p className="text-sm text-gray-1 font-inter break-word">
                    <Link href="/student" className="hover:underline">Apprenants</Link>
                    {" › "}{apprenant.nomComplet}
                </p>
            </div>

            <div className="bg-white rounded-xl shadow p-4 sm:p-6 space-y-8">
                <StudentInfo apprenant={apprenant} />
                <AcademicInfo apprenant={apprenant} />
                <EmpruntHistory emprunts={apprenant.emprunts} />

                <div className="flex justify-end">
                    <button className="w-full sm:w-auto bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 cursor-pointer">
                        Modifier l&apos;apprenant
                    </button>
                </div>
            </div>
        </section>
    );
}
