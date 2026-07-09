

export default function Input({label, name='',type='text', placeholder, classe=''}:{label?:string, name?:string, type?:string, placeholder?:string, classe?:string}){
    return(
        <>
           <div>

                {label &&
                    <label 
                        className="text-sm text-gray-700 font-medium"
                        >
                            {label}
                        </label>
                    
                }
                <input 
                    type={type} 
                    name={name}
                    placeholder={placeholder ? placeholder : ''}
                    className={`w-full block rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary text-sm px-2 py-3 ${classe}`}
                />
           </div>
        </>

        
    )
}