
interface InputProps{
    label:string;
    type: string;
    placeholder: string;
    classe?: string;
}

export default function Input({label, type, placeholder, classe}: InputProps){
    return(
        <div>
            <label >{label}</label>
            <input
              type={type}
              placeholder={placeholder}
              className={`w-full border border-gray-300 rounded-md px-6
                outeline-none focus:border-teal-500 ${classe}`}
            />   
        </div>
    );
}