import DashboardStat from "./DashboardStat"


const DashboardStats = () => {
    
    return (
        <div className="dashboard-stats">
            <DashboardStat
                itemName="Balance"
                itemValue="R$2.437,50"
                isPositive={true}
            />
            <DashboardStat
                itemName="Income"
                itemValue="R$5.000,00"
                isPositive={true}
            />
            <DashboardStat
                itemName="Expenses"
                itemValue="R$2.663,50"
                isPositive={false}
            />
        </div>
    )
}

export default DashboardStats