import Link from "next/link"

export default function SubNavigation(
    {title, link, subTitle}: 
    {title: string, link: {label: string, url: string}, subTitle: string}){

return(<>
    
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
               {title}
            </h1>

            <nav className="mt-2 flex items-center text-sm">
                <Link href={link.url}
                className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
                >
                {link.label}
                </Link>
                <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-900 font-medium">
                    {subTitle}
                </span>
            </nav>
        </div>
        
    </>)
}