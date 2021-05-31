export type Transaction = {
    value: number,
    date: Date,
    description: string
}

export type Account = {
name:string,
CPF:string,
dataNasc: Date,
saldo:number,
extrato:Transaction[]
}