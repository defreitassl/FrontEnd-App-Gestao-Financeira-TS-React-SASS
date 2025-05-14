import { ITransaction } from "./"

interface UserSummary {
    balance: number
    income: number
    expenses: number
    transactions: ITransaction[] | []
}


export default UserSummary