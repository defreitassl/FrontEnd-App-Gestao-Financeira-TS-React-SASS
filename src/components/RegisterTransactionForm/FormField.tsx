import { ReactNode } from "react"

interface IFormField {
    children: ReactNode
}

const FormField = ({ children }: IFormField) => {
    return (
        <div className="form-field">
            {children}
        </div>
    )
}

export default FormField