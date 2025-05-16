import { ITransaction } from "../../types"
import RecentTransaction from "./RecentTransaction"
import formatCurrency from "../../utils/formatCurrency"


interface IRecentTransactions {
    transactions: ITransaction[] | []
}

const RecentTransactions = ({ transactions }: IRecentTransactions) => {

    if (!transactions || transactions.length === 0) return null

    return (
        <div className="recent-transactions">
            {transactions.length > 0 && transactions.map((transaction => {
                return (
                    <RecentTransaction 
                        key={transaction._id}
                        transactionName= {transaction.name}
                        transactionDate={transaction.date ? transaction.date : null}
                        transactionValue={
                            transaction.amount > 0 
                            ? formatCurrency(transaction.amount) 
                            : formatCurrency(transaction.amount)
                        }
                        transactionCategory={transaction.categoryId.name}
                        isPositive={transaction.amount > 0 ? true : false}
                    />
                )
            }))}
        </div>
    )
}

export default RecentTransactions