import DashboardStat from "./DashboardStat"


interface IDashboardStats {
    balance: string | number
    income: string | number
    expenses: string | number
}


const DashboardStats = ({ balance, income, expenses }: IDashboardStats) => {
    
    return (
        <div className="dashboard-stats">
            <div className="balance-stat">
                <p className="balance-text">Balance</p>
                <p className="balance-value">{balance}</p>
            </div>
            <div className="dashboard-stats-inner-container">
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
        </div>
    )
}

export default DashboardStats