import "@/style/globals.css";
import MainLayout from "@/components/Layouts/MainLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestion des emprunts d'ordinateur",
};

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    

    return (
        <html lang="fr">
        <body className="bg-light font-inter">
            <MainLayout children={children} />
        </body>
        </html>
    );
}
