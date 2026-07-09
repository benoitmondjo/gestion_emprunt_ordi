
type PropsBtn={
    label:string
    className?: string
}

export default function SubmitBtn({label, className}: PropsBtn){

    return(<>
        <button 
            type="submit"
            className={`w-full px-2 py-3 rounded-xl cursor-pointer font-semibold text-md capitalize ${className}`}
            >
            {label}
        </button>
    </>)
}