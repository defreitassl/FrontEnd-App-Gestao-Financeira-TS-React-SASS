interface ITransaction {
    _id: string
    userId: string,
    categoryId: {
        _id: string,
        name: string
    },
    name: string,
    amount: number,
    inflow: boolean,
    paymentMethod: "Pix" | "Cartão" | "Dinheiro" | "Transferência",
    description?: string,
    recipient?: string,
    date?: string
}

interface IRegisterTransaction {
    categoryId: string,
    name: string,
    amount: number,
    inflow: boolean,
    paymentMethod: string,
    description?: string,
    recipient?: string,
    date?: string
}

export {
    ITransaction,
    IRegisterTransaction
}