import DashboardStat from "./DashboardStat"


const DashboardStats = () => {
    
    return (
        <div className="dashboard-stats">
            <DashboardStat
                itemName="Balance"
                itemValue="R$ 12.000"
            />
            <DashboardStat
                itemName="Income"
                itemValue="R$ 12.000"
            />
            <DashboardStat
                itemName="Expenses"
                itemValue="R$ 12.000"
            />
        </div>
    )
}

export default DashboardStats