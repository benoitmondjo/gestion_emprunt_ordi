"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

import { MdOutlineDesktopWindows } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

type ChildProps = {
  sidbarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const navItems = [
  {
    label: "Tableau de bord",
    href: "/dashboard",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Ordinateurs",
    href: "/ordinateurs",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    label: "Emprunts",
    href: "/emprunts",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" /><path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    label: "Apprenants",
    href: "/apprenants",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    label: "Salles",
    href: "/salle",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Utilisateurs",
    href: "/utilisateurs",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    label: "Rapports",
    href: "/rapports",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    label: "Paramètres",
    href: "/parametres",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
];

export default function Sidebar({sidbarOpen, setSidebarOpen}: ChildProps) {
    const pathname = usePathname();

    return (
        <aside className={`w-55 bg-primary flex flex-col text-white shrink-0 fixed top-0 left-0 bottom-0 lg:static lg:translate-x-0 transition-all duration-500  z-50  ${sidbarOpen ? "translate-x-0" : "-translate-x-55"}`}>
        
            {/* Logo */}
            <div className="px-4 py-6 flex items-center gap-3 border-b border-white/20">
                <div className="w-9 h-9 px-2 bg-white/20 rounded-lg flex items-center justify-center cursor-pointer">
                    <MdOutlineDesktopWindows className=" h-6 w-6 rounded-lg " />
                </div>
                <div className="leading-tight">
                    <p className="text-[11px] font-medium text-white/80">Gestion des</p>
                    <p className="text-[11px] font-semibold">emprunts d'ordinateur</p>
                </div>
                <button onClick={()=> setSidebarOpen(false)} className="bg-white/20 rounded-lg cursor-pointer px-1 py-1 lg:hidden">
                    <IoCloseSharp className="text-3xl" />
                </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 py-4 px-3">
                <ul className="space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                    return (
                    <li key={item.href}>
                        <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                            isActive
                            ? "bg-white text-[#2FA89E]"
                            : "text-white/85 hover:bg-white/15"
                        }`}
                        >
                        <span className={isActive ? "text-[#2FA89E]" : "text-white/85"}>{item.icon}</span>
                        {item.label}
                        </Link>
                    </li>
                    );
                })}
                </ul>
            </nav>

            {/* Déconnexion */}
            <div className="px-3 py-4 border-t border-white/20">
                <Link
                href="/login"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/85 hover:bg-white/15 transition-all"
                >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
                </svg>
                Déconnexion
                </Link>
            </div>
        </aside>
    );
}
