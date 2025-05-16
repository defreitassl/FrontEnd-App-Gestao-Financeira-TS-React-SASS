interface ILargeInput {
    inputType: string
    placeholder: string
    value: string
    required?: boolean
    setValue: (value: string) => void
}

const LargeInput = ({ inputType, placeholder, value, required=false, setValue }: ILargeInput) => {


    return (
        <input 
            id={value}
            className="large-input" 
            type={inputType} 
            name={value}
            placeholder={placeholder}
            value={value}
            onChange={(e) => {setValue(e.currentTarget.value)}}
            required={required}
        />
    )
}

export default LargeInput