import { useState, useEffect } from "react"
import { Container, MainText, DashboardStats, LargeButton, SubText, RecentTransactions } from "../components"
import { getUserSumary } from "../services"
import { ITransaction, UserSummary } from "../types"
import formatCurrency from "../utils/formatCurrency"


const DashboardPage = () => {
    const [balance, setBalance] = useState<string>("0,00")
    const [income, setIncome] = useState<string>("0,00")
    const [expenses, setExpenses] = useState<string>("0,00")
    const [transactions, setTransactions] = useState<ITransaction[] | []>([])


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
            <LargeButton innerText="New Transaction" event={()=>{}}/>
            <div className="recent-transactions-area">
                <SubText text="Recent Transactions"/>
                <RecentTransactions transactions={transactions}/>
            </div>
        </Container>
    )
}

export default DashboardPage