

export default function LeftPart({className}:{className?: string}){
    return (
        <div className={`bg-primary justify-center items-center ${className}
        text-white px-2`}>
            
            <div className="max-w-100">
                <h1 className="text-5xl font-bold text-center">
                Soyez la bienvenue
            </h1>

            <p className="text-xl text-center mt-6">
                Commencez à gérer les ordinateurs de la fabrique
            </p>
            </div>

        </div>
    )
}