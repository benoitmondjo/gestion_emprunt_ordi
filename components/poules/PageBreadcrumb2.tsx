//On importe les incônes et Link
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";

//On définit les types de l'interface BreadcrumbItem
interface BreadcrumbItem {
  label: string;
  href?: string; //si absent, c'est la page courante (non cliquable)
}

interface PageBreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function PageBreadcrumb({ items }: PageBreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 text-sm mb-4">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center gap-1.5">
            {index > 0 && (
              <FiChevronRight className="w-4 h-4 text-(--texte-gray-1)" />
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-(--texte-gray-1) hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  isLast
                    ? "text-foreground font-medium"
                    : "text-(--texte-gray-1)"
                }
              >
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}