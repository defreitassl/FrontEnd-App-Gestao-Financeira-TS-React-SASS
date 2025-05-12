interface ILargeInput {
    inputType: string
    placeholder: string
    value: string
    setValue: (value: string) => void
}

const LargeInput = ({ inputType, placeholder, value, setValue }: ILargeInput) => {


    return (
        <input 
            className="large-input" 
            type={inputType} 
            name={inputType} id={inputType} 
            placeholder={placeholder}
            value={value}
            onChange={(e) => {setValue(e.currentTarget.value)}}
        />
    )
}

export default LargeInput