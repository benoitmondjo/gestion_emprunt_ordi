"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import { useState } from "react";

export default function MainLayout({children} : {children: React.ReactNode}){

    const [sidbarOpen, setSidebarOpen] = useState(false)



    return(
        <div className="main-container h-screen lg:flex">
            <Sidebar sidbarOpen={sidbarOpen} setSidebarOpen={setSidebarOpen} />
            
            <div className="flex flex-col flex-1">
                <Navbar  sidbarOpen={sidbarOpen} setSidebarOpen={setSidebarOpen} title="Administration" />

                <main className="h-auto overflow-y-auto px-2 md:px-6 pt-20">
                    {children}
                </main>
            </div>
        </div>
    )
}
