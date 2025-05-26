import { TransactionCategory } from "../../types"

interface IFormSelect {
    name: string
    options: TransactionCategory[]
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const FormCategorySelect = ({ name, options, onChange}: IFormSelect) => {
    return (
        <select defaultValue={'Select a category'} className="select-input" name={name} id={name} onChange={onChange} required>
            <option disabled>Select a category</option>
            {
                options.length > 0 && options.map((option => {
                    return (
                        <option key={option._id} value={option._id}>{option.name}</option>
                    )
                }))
            }
        </select>
    )
}

export default FormCategorySelect