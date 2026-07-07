
interface PageTitleProps{
  title:string;
}

export default function PageTitle ({
   title}:
   
   PageTitleProps){
 
    return (
      <div>

        
        {/*Titre principal*/}

        <h1 className="text-4xl font-bold">
            {title}
        </h1>

         {/*fil d'ariane*/}

         <p className="text-gray-500 mt-2">
            Apprenants &gt;{title}
         </p>

    

      </div>
    )
}