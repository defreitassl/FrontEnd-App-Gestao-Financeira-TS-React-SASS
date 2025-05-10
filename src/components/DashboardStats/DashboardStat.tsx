interface IDashboardStat {
    itemName: string
    itemValue: string | number
}

const DashboardStat = ({itemName, itemValue}: IDashboardStat) => {
    return (
        <div className="dashboard-item">
            <p className="dashboard-item-name">{itemName}</p>
            <p className="dashboard-item-value">{itemValue}</p>
        </div>
    )
}

export default DashboardStat