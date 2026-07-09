import Link from "next/link";

// ─── DATA ────────────────────────────────────────────────────────────────────

const statsCards = [
  {
    label: "Total ordinateurs",
    value: "120",
    sub: "Tous les ordinateurs",
    color: "text-[#2FA89E]",
    bg: "bg-[#EAF7F6]",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    label: "Disponibles",
    value: "75",
    sub: "62,5% du parc",
    color: "text-green-500",
    bg: "bg-green-50",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" /><polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    label: "Empruntés",
    value: "38",
    sub: "31,7% du parc",
    color: "text-orange-500",
    bg: "bg-orange-50",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
      </svg>
    ),
  },
  {
    label: "En retard",
    value: "7",
    sub: "5,8% des emprunts",
    color: "text-red-500",
    bg: "bg-red-50",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    label: "Apprenants",
    value: "256",
    sub: "Apprenants inscrits",
    color: "text-purple-500",
    bg: "bg-purple-50",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    label: "Salles",
    value: "8",
    sub: "Salles disponibles",
    color: "text-blue-500",
    bg: "bg-blue-50",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

const monthLabels = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];
const monthData =   [20,    26,    30,    35,    38,    42,     54,     40,     33,    42,     44,    48  ];

const donutSegments = [
  { label: "Salle 1 (30)", pct: 25, color: "#2FA89E" },
  { label: "Salle 2 (24)", pct: 20, color: "#5CB8B2" },
  { label: "Salle 3 (18)", pct: 15, color: "#A3D9D5" },
  { label: "Salle 4 (18)", pct: 15, color: "#F6A623" },
  { label: "Salle 5 (12)", pct: 10, color: "#E74C3C" },
  { label: "Salle 6 (10)", pct: 8,  color: "#9B59B6" },
  { label: "Autres (8)",   pct: 7,  color: "#BDC3C7" },
];

const recentActivities = [
  { type: "emprunt",   title: "Emprunt enregistré",   desc: "Jean Paul a emprunté PC-045",     time: "10:30", color: "text-[#2FA89E]", bg: "bg-[#EAF7F6]" },
  { type: "retour",    title: "Retour enregistré",     desc: "Marie Claire a retourné PC-012",  time: "09:15", color: "text-blue-500",   bg: "bg-blue-50"  },
  { type: "ordi",      title: "Ordinateur ajouté",     desc: "PC-121 a été ajouté au parc",     time: "Hier 16:45", color: "text-[#2FA89E]", bg: "bg-[#EAF7F6]" },
  { type: "apprenant", title: "Apprenant ajouté",      desc: "Lucie Martin a été inscrite",     time: "Hier 14:20", color: "text-purple-500", bg: "bg-purple-50" },
  { type: "retard",    title: "Emprunt en retard",     desc: "PC-007 dépasse la date prévue",   time: "Hier 11:05", color: "text-red-500",    bg: "bg-red-50"    },
];

const dernierEmprunts = [
  { apprenant: "Jean Paul",     ordi: "PC-045", salle: "Salle 1", dateEmprunt: "30/05/2024", datePrevue: "06/06/2024", statut: "En cours" },
  { apprenant: "Marie Claire",  ordi: "PC-012", salle: "Salle 2", dateEmprunt: "29/05/2024", datePrevue: "05/06/2024", statut: "En cours" },
  { apprenant: "Lucie Martin",  ordi: "PC-007", salle: "Salle 3", dateEmprunt: "25/05/2024", datePrevue: "01/06/2024", statut: "En retard" },
  { apprenant: "David Leroy",   ordi: "PC-033", salle: "Salle 1", dateEmprunt: "28/05/2024", datePrevue: "04/06/2024", statut: "En cours" },
  { apprenant: "Sophie Dubois", ordi: "PC-021", salle: "Salle 2", dateEmprunt: "27/05/2024", datePrevue: "03/06/2024", statut: "En cours" },
];

const shortcuts = [
  {
    label: "Nouvel emprunt",
    href: "/loan/create",
    color: "text-[#2FA89E]",
    bg: "bg-[#EAF7F6]",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    label: "Retour d'ordinateur",
    href: "#",
    color: "text-blue-500",
    bg: "bg-blue-50",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
      </svg>
    ),
  },
  {
    label: "Ajouter un ordinateur",
    href: "/computer/create",
    color: "text-green-500",
    bg: "bg-green-50",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M2 4h20v13H2zM8 21h8M12 17v4M12 9v4M10 11h4" />
      </svg>
    ),
  },
  {
    label: "Ajouter un apprenant",
    href: "/student/create",
    color: "text-purple-500",
    bg: "bg-purple-50",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /><line x1="12" y1="1" x2="12" y2="5" /><line x1="10" y1="3" x2="14" y2="3" />
      </svg>
    ),
  },
  {
    label: "Ajouter une salle",
    href: "/classroom/create",
    color: "text-orange-500",
    bg: "bg-orange-50",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "Rapports",
    href: "#",
    color: "text-teal-600",
    bg: "bg-teal-50",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
];

// ─── SVG LINE CHART ──────────────────────────────────────────────────────────

function LineChart() {
  const W = 600, H = 200, PAD = { top: 20, right: 20, bottom: 30, left: 30 };
  const max = Math.max(...monthData) + 10;
  const min = 0;
  const x = (i: number) => PAD.left + (i / (monthData.length - 1)) * (W - PAD.left - PAD.right);
  const y = (v: number) => PAD.top + (1 - (v - min) / (max - min)) * (H - PAD.top - PAD.bottom);

  const pts = monthData.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  const areaPath = `M${x(0)},${y(monthData[0])} ` +
    monthData.slice(1).map((v, i) => `L${x(i + 1)},${y(v)}`).join(" ") +
    ` L${x(monthData.length - 1)},${H - PAD.bottom} L${x(0)},${H - PAD.bottom} Z`;

  const yTicks = [0, 10, 20, 30, 40, 50, 60];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2FA89E" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#2FA89E" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {/* Grid */}
      {yTicks.map((tick) => (
        <g key={tick}>
          <line x1={PAD.left} y1={y(tick)} x2={W - PAD.right} y2={y(tick)} stroke="#E5E7EB" strokeWidth="1" />
          <text x={PAD.left - 5} y={y(tick) + 4} textAnchor="end" fontSize="9" fill="#9CA3AF">{tick}</text>
        </g>
      ))}
      {/* Area */}
      <path d={areaPath} fill="url(#chartGrad)" />
      {/* Line */}
      <polyline points={pts} fill="none" stroke="#2FA89E" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      {/* Points */}
      {monthData.map((v, i) => (
        <circle key={i} cx={x(i)} cy={y(v)} r="3.5" fill="white" stroke="#2FA89E" strokeWidth="2" />
      ))}
      {/* X labels */}
      {monthLabels.map((lbl, i) => (
        <text key={lbl} x={x(i)} y={H - 5} textAnchor="middle" fontSize="9" fill="#9CA3AF">{lbl}</text>
      ))}
    </svg>
  );
}

// ─── SVG DONUT ────────────────────────────────────────────────────────────────

function DonutChart() {
  const R = 70, r = 42, cx = 90, cy = 90;
  let cumPct = 0;
  const slices = donutSegments.map((seg) => {
    const startAngle = (cumPct / 100) * 2 * Math.PI - Math.PI / 2;
    cumPct += seg.pct;
    const endAngle = (cumPct / 100) * 2 * Math.PI - Math.PI / 2;
    const x1 = cx + R * Math.cos(startAngle);
    const y1 = cy + R * Math.sin(startAngle);
    const x2 = cx + R * Math.cos(endAngle);
    const y2 = cy + R * Math.sin(endAngle);
    const xi1 = cx + r * Math.cos(startAngle);
    const yi1 = cy + r * Math.sin(startAngle);
    const xi2 = cx + r * Math.cos(endAngle);
    const yi2 = cy + r * Math.sin(endAngle);
    const large = seg.pct > 50 ? 1 : 0;
    const midAngle = startAngle + (endAngle - startAngle) / 2;
    const lx = cx + (R - 12) * Math.cos(midAngle);
    const ly = cy + (R - 12) * Math.sin(midAngle);
    return { ...seg, d: `M${x1},${y1} A${R},${R} 0 ${large},1 ${x2},${y2} L${xi2},${yi2} A${r},${r} 0 ${large},0 ${xi1},${yi1} Z`, lx, ly };
  });

  return (
    <svg viewBox="0 0 180 180" className="w-[180px] h-[180px] shrink-0">
      {slices.map((seg, i) => (
        <g key={i}>
          <path d={seg.d} fill={seg.color} />
          {seg.pct >= 8 && (
            <text x={seg.lx} y={seg.ly} textAnchor="middle" dominantBaseline="middle" fontSize="8" fill="white" fontWeight="600">
              {seg.pct}%
            </text>
          )}
        </g>
      ))}
      <circle cx={cx} cy={cy} r={r - 4} fill="white" />
      <text x={cx} y={cy - 6} textAnchor="middle" fontSize="18" fontWeight="700" fill="#1F2937">120</text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize="8" fill="#9CA3AF">Total</text>
    </svg>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Dashboard() {
  return (
    <>

        <div className="flex-1 p-2 space-y-6">

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {statsCards.map((card) => (
                    <div key={card.label} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    <div className={`w-10 h-10 rounded-xl ${card.bg} ${card.color} flex items-center justify-center mb-3`}>
                        {card.icon}
                    </div>
                    <p className="text-xs text-gray-500 font-medium">{card.label}</p>
                    <p className={`text-2xl font-bold mt-0.5 ${card.color}`}>{card.value}</p>
                    <p className="text-[11px] text-gray-400 mt-1">{card.sub}</p>
                    </div>
                ))}
            </div>


            {/* Charts + Activities */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* Line chart */}
            <div className="xl:col-span-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-800">Emprunts par mois</h2>
                <select className="text-xs border border-gray-200 rounded-lg px-2 py-1 text-gray-600 bg-white focus:outline-none">
                    <option>Cette année</option>
                    <option>Année précédente</option>
                </select>
                </div>
                <div className="h-50">
                <LineChart />
                </div>
            </div>

            {/* Donut */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h2 className="text-sm font-bold text-gray-800 mb-4">Répartition des ordinateurs par salle</h2>
                <div className="flex items-center gap-4">
                <DonutChart />
                <div className="space-y-1.5 flex-1 min-w-0">
                    {donutSegments.map((seg) => (
                    <div key={seg.label} className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: seg.color }} />
                        <span className="text-[11px] text-gray-600 truncate">{seg.label}</span>
                    </div>
                    ))}
                </div>
                </div>
            </div>

            {/* Activités récentes */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h2 className="text-sm font-bold text-gray-800 mb-4">Activités récentes</h2>
                <div className="space-y-3">
                {recentActivities.map((act, i) => (
                    <div key={i} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg ${act.bg} ${act.color} flex items-center justify-center shrink-0 mt-0.5`}>
                        {act.type === "emprunt" && (
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><polyline points="8 17 12 21 16 17" /><line x1="12" y1="3" x2="12" y2="21" /></svg>
                        )}
                        {act.type === "retour" && (
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><polyline points="16 7 12 3 8 7" /><line x1="12" y1="3" x2="12" y2="21" /></svg>
                        )}
                        {act.type === "ordi" && (
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                        )}
                        {act.type === "apprenant" && (
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                        )}
                        {act.type === "retard" && (
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /></svg>
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-semibold text-gray-800 truncate">{act.title}</p>
                        <span className="text-[10px] text-gray-400 shrink-0">{act.time}</span>
                        </div>
                        <p className="text-[11px] text-gray-500 truncate">{act.desc}</p>
                    </div>
                    </div>
                ))}
                </div>
                <Link href="#" className="flex items-center gap-1 mt-4 text-xs font-semibold text-[#2FA89E] hover:underline">
                Voir toutes les activités
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><polyline points="9 18 15 12 9 6" /></svg>
                </Link>
            </div>
            </div>

            {/* Derniers emprunts + Raccourcis */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            {/* Table emprunts */}
            <div className="xl:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h2 className="text-sm font-bold text-gray-800 mb-4">Derniers emprunts</h2>
                <div className="overflow-x-auto">
                <table className="w-full text-xs">
                    <thead>
                    <tr className="border-b border-gray-100">
                        {["Apprenant", "Ordinateur", "Salle", "Date d'emprunt", "Date prévue", "Statut"].map((h) => (
                        <th key={h} className="text-left pb-2 text-gray-400 font-medium pr-4">{h}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {dernierEmprunts.map((row, i) => (
                        <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                        <td className="py-3 pr-4 font-medium text-gray-800">{row.apprenant}</td>
                        <td className="py-3 pr-4 text-gray-600">{row.ordi}</td>
                        <td className="py-3 pr-4 text-gray-600">{row.salle}</td>
                        <td className="py-3 pr-4 text-gray-500">{row.dateEmprunt}</td>
                        <td className="py-3 pr-4 text-gray-500">{row.datePrevue}</td>
                        <td className="py-3">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                            row.statut === "En retard"
                                ? "bg-red-100 text-red-600"
                                : "bg-green-100 text-green-600"
                            }`}>
                            {row.statut}
                            </span>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
                <Link href="/loan" className="flex items-center gap-1 mt-4 text-xs font-semibold text-[#2FA89E] hover:underline">
                Voir tous les emprunts
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><polyline points="9 18 15 12 9 6" /></svg>
                </Link>
            </div>

            {/* Raccourcis */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h2 className="text-sm font-bold text-gray-800 mb-4">Raccourcis</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2  gap-3">
                {shortcuts.map((s) => (
                    <Link
                    key={s.label}
                    href={s.href}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl hover:shadow-md transition-all group"
                    >
                    <div className={`w-11 h-11 rounded-xl ${s.bg} ${s.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        {s.icon}
                    </div>
                    <span className="text-[10px] text-center text-gray-600 leading-tight font-medium">{s.label}</span>
                    </Link>
                ))}
                </div>
            </div>
            </div>
        </div>

        
    </>
  );
}
