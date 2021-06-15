export type userPersonalInfo = {
   name: string
   nickname: string
}

export type userCredentials = {
   email: string
   password: string
}

export type authenticationData = {
   id: string,
   role: string
}

export enum USER_ROLES{
   NORMAL = "NORMAL",
   ADMIN = "ADMIN"
}

export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
   role: USER_ROLES
}

export type userAddress = {
   street: string,
   neighborhood: string,
   city: string,
   state: string
}

export type adressInfo = {
   street: string,
   neighborhood: string,
   city: string, 
   state: string
}