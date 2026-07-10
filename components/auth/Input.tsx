
import { IconType } from "react-icons"

type PropsInput = 
    {
        name?:string, 
        type?:string, 
        placeholder?:string, 
        classe?:string, 
        icon: IconType,
        iconClasse: string
    }


export default function Input(
    {name='',type='text', placeholder='', classe='', icon: Icon, iconClasse}: PropsInput
){
    return(
        <>
           <div className="flex items-center gap-4 rounded-xl border border-gray-300 
                     px-2 py-3">
                <Icon className={`text-primary ${iconClasse}`} />
                <input 
                    type={type} 
                    name={name}
                    placeholder={placeholder}
                    className={`w-full block focus:outline-none text-md  ${classe}`}
                />
           </div>
        </>

        
    )
}