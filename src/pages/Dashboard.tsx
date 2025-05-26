import { useState, useEffect } from "react"
import { 
    Container, 
    MainText, 
    DashboardStats,
    SubText, 
    RecentTransactions 
} from "../components"
import { getUserSumary } from "../services"
import { ITransaction, UserSummary } from "../types"
import formatCurrency from "../utils/formatCurrency"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTurnDown, faTurnUp } from "@fortawesome/free-solid-svg-icons"


const DashboardPage = () => {
    const [balance, setBalance] = useState<string>("0,00")
    const [income, setIncome] = useState<string>("0,00")
    const [expenses, setExpenses] = useState<string>("0,00")
    const [transactions, setTransactions] = useState<ITransaction[] | []>([])
    const navigate = useNavigate()


    useEffect(() => {
        const fetchUserSummary = async (token: string) => {
            const data: UserSummary | undefined = await getUserSumary(token)
            
            if (!data) throw new Error("Error while receiving user summary")
            
            setBalance(formatCurrency(data.balance))
            setIncome(formatCurrency(data.income))
            setExpenses(formatCurrency(data.expenses))
            setTransactions(data.transactions)
        }
        const token: string | null = localStorage.getItem('token')
        if (!token) throw new Error ("Cannot find session token at localStorage")

        fetchUserSummary(token)
    }, [])

    return (
        <Container>
            <MainText text="Dashboard" alignLeft={true}/>
            <DashboardStats balance={balance} income={income} expenses={expenses}/>
            <div className="register-transaction-btns">
                <button 
                    className="register-transaction-btn income"
                    onClick={() => navigate('/dashboard/transaction/new?inflow=true')}
                >
                    <p className="register-transaction-btn-text"><FontAwesomeIcon icon={faTurnUp}/></p>
                </button>
                <button 
                    className="register-transaction-btn expense"
                    onClick={() => navigate('/dashboard/transaction/new?inflow=false')}
                >
                    <p className="register-transaction-btn-text"><FontAwesomeIcon icon={faTurnDown}/></p>
                </button>
            </div>
            <div className="recent-transactions-area">
                <SubText text="Recent Transactions"/>
                <RecentTransactions transactions={transactions}/>
            </div>
        </Container>
    )
}

export default DashboardPage