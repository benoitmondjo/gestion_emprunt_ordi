

export default function Input({type, placeholder, classe}:{type:string, placeholder:string, classe?:string}){
    return(
        <div>
            <input
              type={type}
              placeholder={placeholder}
              className={`w-full outline-none ${classe}`}
            />   
        </div>
    )
}