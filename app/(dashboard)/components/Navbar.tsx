"use client";
import { useState } from "react";

export default function Navbar({ title, subtitle }: { title: string; subtitle?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-3">
        <button className="text-gray-500 hover:text-gray-700 transition-colors">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div>
          <h1 className="text-lg font-bold text-gray-800 leading-tight">{title}</h1>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Cloche notifs */}
        <button className="relative text-gray-500 hover:text-[#2FA89E] transition-colors">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
        </button>

        {/* User */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#2FA89E] flex items-center justify-center text-white font-semibold text-sm">A</div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800">Admin</p>
              <p className="text-[11px] text-gray-400">Administrateur</p>
            </div>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="text-gray-400">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {open && (
            <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
              <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Mon profil</a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Paramètres</a>
              <hr className="my-1 border-gray-100" />
              <a href="/login" className="flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50">Déconnexion</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
