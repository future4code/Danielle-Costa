export type Transaction = {
    value: number,
    date: string,
    description: string
}

export type Account = {
name:string,
CPF:string,
nasc: string,
saldo:number,
extrato:Transaction[]
}

export type Boleto = {
    valor: number,
    dataVenc: string,
    descrição: string
}

export type User = {
    id: number,
    name:string,
    CPF:string,
    nasc: string,
    saldo:number,
    extrato: [{}]
}
export const users: User[] = [
    {
        id: 1,
        name:"Danielle",
        CPF:"12345678901",
        nasc: "1990-01-01",
        saldo:1000,
        extrato: [{ value:1000, data:"2021-10-05", descrição: "deposito"}]
    },

    {
        id: 2,
        name:"Daniel",
        CPF:"12345678902",
        nasc: "1995-01-01",
        saldo:1000,
        extrato: [{ value:1000, data:"2021-10-05", descrição: "deposito"}]
    },

    {
        id: 3,
        name:"Daniela",
        CPF:"12345678903",
        nasc: "2000-01-01",
        saldo:1000,
        extrato: [{ value:1000, data:"2021-10-05", descrição: "deposito"}]
    },
]
