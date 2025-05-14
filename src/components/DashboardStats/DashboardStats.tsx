import DashboardStat from "./DashboardStat"


interface IDashboardStats {
    balance: number
    income: number
    expenses: number
}


const DashboardStats = ({ balance, income, expenses }: IDashboardStats) => {
    
    return (
        <div className="dashboard-stats">
            <DashboardStat
                itemName="Balance"
                itemValue={balance}
                isPositive={balance > 0 ? true : false}
            />
            <DashboardStat
                itemName="Income"
                itemValue={income}
                isPositive={true}
            />
            <DashboardStat
                itemName="Expenses"
                itemValue={expenses}
                isPositive={false}
            />
        </div>
    )
}

export default DashboardStats