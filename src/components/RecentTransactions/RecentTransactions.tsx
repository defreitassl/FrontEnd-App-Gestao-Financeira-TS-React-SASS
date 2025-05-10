import RecentTransaction from "./RecentTransaction"



const RecentTransactions = () => {


    return (
        <div className="recent-transactions">
            <RecentTransaction 
                transactionName="Groceries" 
                transactionValue="1.456,90" 
                transactionCategory="Food"
                isPositive={false}
            />
            <RecentTransaction 
                transactionName="Nike AirMax" 
                transactionValue="100,90" 
                transactionCategory="Clothes"
                isPositive={false}
            />
            <RecentTransaction 
                transactionName="Freelance" 
                transactionValue="900,00" 
                transactionCategory="Programing"
                isPositive={true}
            />
        </div>
    )
}

export default RecentTransactions