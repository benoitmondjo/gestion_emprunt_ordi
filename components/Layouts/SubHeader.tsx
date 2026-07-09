import { FiPlus } from "react-icons/fi";

interface HeaderProps {
    title: string;
    subtitle: string;
    buttonLabel: string;
    onButtonClick?: () => void; 
}

export default function SubHeader({ title, subtitle, buttonLabel, onButtonClick }: HeaderProps) {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 font-roboto">{title}</h1>
                <p className="text-sm text-gray-1 font-inter">{subtitle}</p>
            </div>
            <button
                onClick={onButtonClick}
                className="flex items-center gap-2 bg-primary shadow hover:opacity-90 text-white 
                    px-4 py-3 rounded-xl text-sm font-medium font-inter cursor-pointer w-fit"
            >
                <FiPlus />
                {buttonLabel}
            </button>
        </div>
    )
}