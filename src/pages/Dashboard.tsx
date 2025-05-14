import { useState, useEffect } from "react"
import { Container, MainText, DashboardStats, LargeButton, SubText, RecentTransactions } from "../components"
import { getUserSumary } from "../services"
import { ITransaction, UserSummary } from "../types"


const DashboardPage = () => {
    const [balance, setBalance] = useState<number>(0)
    const [income, setIncome] = useState<number>(0)
    const [expenses, setExpenses] = useState<number>(0)
    const [transactions, setTransactions] = useState<ITransaction[] | []>([])


    useEffect(() => {
        const fetchUserSummary = async (token: string) => {
            const data: UserSummary | undefined = await getUserSumary(token)
            
            if (!data) throw new Error("Error while receiving user summary")
            
            setBalance(data.balance)
            setIncome(data.income)
            setExpenses(data.expenses)
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