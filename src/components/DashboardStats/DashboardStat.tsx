interface IDashboardStat {
    itemName: string
    itemValue: string | number
    isPositive: boolean
}

const DashboardStat = ({itemName, itemValue, isPositive}: IDashboardStat) => {
    return (
        <div className="dashboard-item">
            <p className="dashboard-item-name">{itemName}</p>
            <p className={
                isPositive ? "dashboard-item-value inflow" 
                : "dashboard-item-value outflow"
            }>{isPositive ? "+" : "-"}{itemValue}</p>
        </div>
    )
}

export default DashboardStat