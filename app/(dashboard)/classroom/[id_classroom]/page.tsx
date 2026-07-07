// On importe les composants 
import PageBreadcrumb2 from "@/components/classroom/PageBreadcrumb2";




/**
* Page pour voir les details d'une classe
 * @returns 
 */
export default function ShowClassroom() {
    return (<>
        <PageBreadcrumb2
            items={[
                { label: "Salles", href: "/dashboard/classroom" },
                { label: "Détail de la salle" },
            ]}
        />

    </>);
}
