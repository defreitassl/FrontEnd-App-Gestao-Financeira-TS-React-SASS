import { TransactionCategory } from "../../types"

interface IFormSelect {
    name: string
    options: TransactionCategory[]
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const FormCategorySelect = ({ name, options, value, onChange}: IFormSelect) => {
    return (
        <select className="select-input" name={name} id={name} value={value} onChange={onChange} required>
            <option selected disabled>Select a category</option>
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