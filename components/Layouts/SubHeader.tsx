import { FiPlus } from "react-icons/fi";
import Link  from "next/link"
interface HeaderProps {
    title: string;
    subtitle: string;
    link: {label: string, url: string};
    onButtonClick?: () => void; 
}

export default function SubHeader({ title, subtitle, link, onButtonClick }: HeaderProps) {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 font-roboto">{title}</h1>
                <p className="text-sm text-gray-1 font-inter">{subtitle}</p>
            </div>

            <Link href={link.url}
                onClick={onButtonClick}
                className="flex items-center gap-2 bg-primary shadow hover:opacity-90 text-white 
                    px-4 py-3 rounded-xl text-sm font-medium font-inter cursor-pointer w-fit"
            >
                <FiPlus />
                {link.label}
            </Link>
        </div>
    )
}