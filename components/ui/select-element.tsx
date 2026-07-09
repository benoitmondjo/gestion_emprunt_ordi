
type OptionType = {id: number, title: string}

type ArrayOptionsType = OptionType[]

export {type OptionType, type ArrayOptionsType}

export default function Select({label, optionsData}: {label?: string, optionsData: ArrayOptionsType}){

    return(<>
    
        <div>

            {label &&
                <label 
                    className="block text-sm font-medium text-gray-700 mb-1">
                        {label}
                </label>
            }

            <div className="flex gap-1 ">

                <select 
                        className="flex-1 px-3  py-3 text-sm border border-gray-300 rounded-xl bg-white focus:outline-none text-md
                        focus:ring-1 focus:text-primary 
                    ">

                    <option>Sélectionner...</option>
                    {optionsData.map( (option:OptionType) => (
                        <option key={option.id}>{option.title}</option>
                    ))}

                </select>

            </div>
        </div>

    </>)
}