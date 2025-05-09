interface ILargeInput {
    inputType: string
    placeholder: string
}

const LargeInput = ({ inputType, placeholder }: ILargeInput) => {

    return (
        <input 
            className="large-input" 
            type={inputType} 
            name={inputType} id={inputType} 
            placeholder={placeholder}
        />
    )
}

export default LargeInput