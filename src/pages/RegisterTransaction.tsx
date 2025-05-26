import { useEffect, useState } from "react"
import { 
    Container, 
    MainText,
    LargeInput,
    FormLabel,
    FormCategorySelect,
    FormField
} from "../components"
import { getAllCategories, registerOneTransaction } from "../services"
import { IRegisterTransaction, TransactionCategory } from "../types"
import { useNotification } from "../hooks"
import { useNavigate, useSearchParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"


const RegisterTransaction = () => {
    const [category, setCategory] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [amount, setAmount] = useState<string>("")
    const [paymentMethod, setPaymentMethod] = useState<string>("Cartão")
    const [recipient, setRecipient] = useState<string>("")
    const [date, setDate] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const [categories, setCategories] = useState<TransactionCategory[]>([])

    const { showNotification } = useNotification()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const inflow = searchParams.get("inflow") ? searchParams.get("inflow") === "true" : false

    useEffect(() => {
        const fetchCategories = async (token: string) => {
            const data = await getAllCategories(token)

            if (!data) throw new Error("Error while receiving categories")

            setCategories(data)
        }
        const token: string | null = localStorage.getItem("token")
        if (!token) throw new Error("Cannot find session token at localStorage")
        
        fetchCategories(token)
    }, [])

    const handleRegisterTransaction = async (e: React.FormEvent) => {
        e.preventDefault()

        const token: string | null = localStorage.getItem("token")
        if (!token) return navigate("auth/login")

        const transaction: IRegisterTransaction = {
            categoryId: category,
            name,
            amount: parseFloat(amount),
            inflow: inflow,
            paymentMethod: paymentMethod,
            date,
            recipient,
            description
        }

        const response = await registerOneTransaction(token, transaction)

        if (!response) {
            showNotification("Something went wrong", "error")
            return
        }

        showNotification(response.message, response.error)
        navigate("/dashboard", { replace: true })
    }


    return (
        <Container>
            <div className="register-transaction-area">
                <MainText text="New Transaction"/>
                <form action="" onSubmit={handleRegisterTransaction} className="register-transaction-form">
                    
                    <FormField>
                        <FormLabel required={true} label="Name" />
                        <LargeInput 
                            inputType="text"
                            placeholder="Ex: Car rent"
                            value={name}
                            setValue={setName}
                            required={true}
                        />
                    </FormField>

                    <div className="form-group">
                        <FormField>
                            <FormLabel required={true} label="Pay Method" />
                            <select 
                                className="select-input" 
                                name="payMethod" 
                                value={paymentMethod} 
                                onChange={(e) => {setPaymentMethod(e.target.value)}}
                            >
                                <option value="Pix">Pix</option>
                                <option value="Cartão">Card</option>
                                <option value="Transferência">Transfer</option>
                                <option value="Dinheiro" defaultValue={'Cash'}>Cash</option>
                            </select>
                        </FormField>

                        <FormField>
                            <FormLabel required={true} label="Amount" />
                            <LargeInput 
                                inputType="number"
                                placeholder="R$"
                                value={amount}
                                setValue={setAmount}
                                required={true}
                            />
                        </FormField>
                    </div>

                    <div className="form-group">
                        <FormField>
                            <FormLabel required={true} label="Category" />
                            <FormCategorySelect
                                name="category" 
                                options={categories} 
                                onChange={(e) => {setCategory(e.target.value)}} 
                            />
                        </FormField>
                        <FormField>
                            <FormLabel label="Date" />
                            <input 
                                className="date-input" 
                                type="date" 
                                name="date" 
                                onChange={(e) => setDate(e.target.value)} 
                            />
                        </FormField>
                    </div>

                    <FormField>
                        <FormLabel label="Recipient" />
                        <LargeInput
                            inputType="text"
                            placeholder="Ex: Douglas"
                            value={recipient}
                            setValue={setRecipient}
                        />
                    </FormField>

                    <FormField>
                        <FormLabel label="Description" />
                        <textarea 
                            className="description-text-area" 
                            name="" 
                            id="" 
                            rows={4} 
                            placeholder="Ex: 'Rented my car'" 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </FormField>

                    <div className="form-button">
                        <button 
                            className="navigate-previous-btn"
                            onClick={() => navigate(-1)}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button 
                            className="add-transaction-btn" 
                            type="submit"
                        >Add</button>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default RegisterTransaction