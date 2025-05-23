interface IRecentTransaction {
    transactionName: string
    transactionCategory: string
    transactionValue: string | number
    transactionDate: string | null
    isPositive: boolean
}

const RecentTransaction = ({
    transactionName,
    transactionCategory,
    transactionValue,
    transactionDate,
    isPositive
}: IRecentTransaction) => {
    
    
    return (
        <div className="recent-transaction-item">
            <p className="recent-transaction-name">{transactionName}</p>
            <div className="recent-transaction-inner-container">
                <p className="recent-transaction-category">{transactionCategory}</p>
                {
                    transactionDate && 
                    <p className="recent-transaction-date">{transactionDate}</p>
                }
                <p className={
                    isPositive ? "recent-transaction-value inflow" 
                    : "recent-transaction-value outflow"
                }>{isPositive ? null : "-"}{transactionValue}</p>
            </div>
        </div>
    )
}

export default RecentTransaction