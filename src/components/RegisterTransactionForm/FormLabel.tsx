

interface IFormLabel {
    required?: boolean
    label: string
}

const FormLabel = ({ required=false, label }: IFormLabel) => {
    return (
        <label 
            className="small-form-label"
        >
            {required ? <span>*</span> : null}
            {label}
        </label>
    )
}

export default FormLabel