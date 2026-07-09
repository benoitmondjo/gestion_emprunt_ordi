
type PropsBtn={
    label:string
    className?: string
}

export default function ResettBtn({label, className}: PropsBtn){

    return(<>
        <button 
            type="reset"
            className={`w-full px-2 py-3 rounded-xl cursor-pointer capitalize ${className}`}
            >
            {label}
        </button>
    </>)
}