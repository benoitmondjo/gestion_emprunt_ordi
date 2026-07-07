"use client"

// Import de l'icône et le système de navigation
import { FiHome } from "react-icons/fi";
import { useRouter, useParams } from "next/navigation";

// On importe les composants 
import PageBreadcrumb2 from "@/components/classroom/PageBreadcrumb2";
import HeaderSalleDetail from "@/components/classroom/HeaderSalleDetail";






/**
* Page pour voir les details d'une classe
 * @returns 
 */
export default function ShowClassroom() {
  const router = useRouter();
  const { id_classroom } = useParams<{ id_classroom: string }>();

  return (
    <>
      <PageBreadcrumb2
        items={[
          { label: "Salles", href: "/classroom" },
          { label: "Détail de la salle" },
        ]}
      />
      <HeaderSalleDetail
        icon={FiHome}
        title="Salle 101"
        subtitle="Détails et équipements de la salle"
        onModifierClick={() =>
          router.push(`/classroom/edit/${id_classroom}`)
        }
        onRetourClick={() => router.push("/classroom")}
      />
    </>
  );
}