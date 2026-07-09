

export default function Input({name='',type='text', placeholder, classe=''}:{name?:string, type?:string, placeholder?:string, classe?:string}){
    return(
        <>
           <div className="">

                <input 
                    type={type} 
                    name={name}
                    placeholder={placeholder ? placeholder : ''}
                    className={`w-full block rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary  px-2 py-3 ${classe}`}
                />
           </div>
        </>

        
    )
}