
// Composant Breadcrumb : affiche la fil d'Ariane qui en haut de la navigation

import { FiChevronRight } from "react-icons/fi";

type BreadcrumbProps = {
  items: string[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-1 text-sm text-gray-500">
      <span>{items[0]}</span>
      <FiChevronRight size={14} />
      <span>{items[1]}</span>
      <FiChevronRight size={14} />
      <span className="font-semibold text-gray-700">{items[2]}</span>
    </div>
  );
}
