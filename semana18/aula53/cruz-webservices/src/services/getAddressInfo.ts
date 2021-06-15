import { userAddress } from "../types";
import axios from 'axios'

export const getAddressInfo = async (cep: string)
: Promise <userAddress | null> => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        const address : userAddress = {
            city: response.data.localidade,
            neighborhood: response.data.bairro,
            state: response.data.uf,
            street: response.data.logradouro
        }
        return address

    } catch (error) {
        return null
    }
}